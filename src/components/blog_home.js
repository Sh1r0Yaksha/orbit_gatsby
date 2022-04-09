import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { kebabCase } from "lodash";

const BlogHome = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 6
            ) {
                nodes {
                    frontmatter {
                        title
                        tags
                        description
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    id
                    slug
                }
            }
        }
    `);
    return (
        <div className="bg-gray-700">
            <section className="text-gray-200 body-font xl:container mx-auto px-4 md:px-4 xl:px-20 bg-gray-800">
                <div className="lg:py-12 py-6 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h2 className="title-font font-heads text-2xl mb-4 font-medium text-white">
                            Recent Articles
                        </h2>
                        <p className="md:mb-6 font-medium leading-6">
                            Explore some of the most recent articles published
                            by us under various categories.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {data.allMdx.nodes.map((node) => (
                            <article
                                className="p-2 lg:w-1/3 sm:w-1/2"
                                key={node.id}
                            >
                                <div className="h-full overflow-hidden bg-gray-900 rounded-lg">
                                    <Link to={`/blog/${node.slug}`}>
                                        <GatsbyImage
                                            className="lg:h-56 rounded-tl-lg rounded-tr-lg md:h-36 w-full object-cover object-center"
                                            image={getImage(
                                                node.frontmatter.thumbnail
                                            )}
                                        />
                                    </Link>
                                    <div className="p-5">
                                        {node.frontmatter.tags ? (
                                            <div className="flex items-center mb-2">
                                                {node.frontmatter.tags.map(
                                                    (tag) => (
                                                        <Link
                                                            to={`/topics/${kebabCase(
                                                                tag
                                                            )}/`}
                                                        >
                                                            <p className="tracking-widest text-xs font-sans capitalize font-semibold text-black mr-2 bg-lime-400 px-2 rounded-xl">
                                                                {tag}
                                                            </p>
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        ) : null}
                                        <h2 className="title-font text-lg font-medium font-heads text-white mb-2">
                                            <Link to={`/blog/${node.slug}`}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </h2>
                                        <p className="leading-6 mb-4 text-gray-200">
                                            {node.frontmatter.description}
                                        </p>
                                        <div className="flex items-center justify-between flex-wrap ">
                                            <p className="flex items-center text-gray-200 text-sm font-medium md:mb-2 lg:mb-0">
                                                <StaticImage
                                                    className="w-7 h-7 mr-2 object-cover object-center rounded-full"
                                                    src="../images/Ajay Choudhury.png"
                                                    alt="A dinosaur"
                                                />
                                                Ajay Choudhury
                                            </p>
                                            <Link to={`/blog/${node.slug}`}>
                                                <button className="flex items-center justify-between bg-yellow-400 border-0 py-0.5 px-3 focus:outline-none hover:bg-lime-600 rounded-3xl text-black font-medium hover:text-white mt-4 md:mt-0">
                                                    Read →
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="flex justify-center lg:mt-10 mt-6">
                        <Link to="/blog/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Browse
                            </button>
                        </Link>
                        <Link to="/disclosure/">
                            <button className="ml-2 flex items-center justify-between bg-lime-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black hover:text-white font-semibold mt-4 md:mt-0">
                                Sources
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogHome;

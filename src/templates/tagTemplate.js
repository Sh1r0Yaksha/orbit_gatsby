import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { kebabCase } from "lodash";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// credit: https://eneaxharja.com/add-tags-to-mdx-blog/

import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
    query ($tag: String) {
        allMdx(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        tags
                        description
                        slug
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
    }
`;

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMdx;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;

    return (
        <Layout>
            <Seo
                title={tag}
                description="All the topics covered on OrbitGadget blog and discussions are listed on this page, all grouped together. Happy Reading!"
                pathname={`topics/${kebabCase(tag)}/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font capitalize font-heads lg:text-3xl text-2xl mb-6 font-medium text-white">
                        {tagHeader}
                    </h1>
                    <div className="flex justify-center">
                        <Link to="/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Back to Home
                            </button>
                        </Link>
                        <Link to="/blog/">
                            <button className="ml-2 flex items-center justify-between bg-lime-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                Browse Blog
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-600 body-font xl:container mx-auto px-2 md:px-4 xl:px-20 bg-gray-800 pb-4">
                    <div className="lg:py-12 py-6 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {edges.map(({ node }) => (
                                <article
                                    className="p-4 lg:w-1/3 sm:w-1/2"
                                    key={node.id}
                                >
                                    <div className="h-full overflow-hidden bg-gray-900 rounded-lg">
                                        <Link to={`/blog/${node.slug}`}>
                                            <GatsbyImage
                                                className="lg:h-56 rounded-tr-lg rounded-tl-lg md:h-36 w-full object-cover object-center"
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
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Tags;

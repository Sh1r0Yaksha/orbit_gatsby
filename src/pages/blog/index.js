import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { kebabCase } from "lodash";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <Seo title="Blog" pathname={`blog/`} />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        The Tech Blog
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        A tech and study-oriented blog for geeks. We love being
                        surrounded by gadgets, algorithms, codes and ideas.We
                        cover tech, tutorials, guides, tech hacks and tips &
                        tricks in this blog.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Back to Home
                            </button>
                        </Link>
                        <Link to="/projects/">
                            <button className="ml-2 flex items-center justify-between bg-lime-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                See Projects
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-600 body-font xl:container mx-auto px-2 md:px-4 xl:px-20 bg-gray-800 pb-4">
                    <div className="lg:py-8 py-6 mx-auto">
                        <div className="lg:pb-8 pb-6">
                            <p className="my-0 py-0 text-gray-200 font-heads font-medium">
                                <i className="bi bi-check-circle-fill text-green-600 mr-2"></i>
                                {data.allMdx.totalCount} ARTICLES & GUIDES
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {data.allMdx.nodes.map((node) => (
                                <article
                                    className="p-4 lg:w-1/3 sm:w-1/2"
                                    key={node.id}
                                >
                                    <div className="h-full overflow-hidden rounded-lg bg-gray-900">
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
                                                        src="../../images/Ajay Choudhury.png"
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

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
            totalCount
        }
    }
`;

export default BlogPage;

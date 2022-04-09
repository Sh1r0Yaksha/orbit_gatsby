import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
    query {
        allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
            totalCount
        }
    }
`;

const TagsPage = ({ data }) => (
    <Layout>
        <Seo
            title="Topics"
            description="All the topics covered on OrbitGadget blog and discussions are listed on this page, all grouped together. Happy Reading!"
            pathname={`topics/`}
        />
        <div className="bg-gray-700">
            <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                    Browse All Topics
                </h1>
                <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                    All the topics we have covered, discussed and are planning
                    to cover are listed here. Happy Reading!
                </p>
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
            <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-20 bg-gray-800 pb-4">
                <div className="lg:py-12 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data.allMdx.group.map(({ fieldValue, totalCount }) => (
                            <div className="p-2 md:w-1/3 sm:w-1/2 ">
                                <div className="flex rounded-2xl h-full bg-gray-900 p-4 flex-col">
                                    <div className="flex items-center mb-4">
                                        <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-gray-700 text-white flex-shrink-0 p-1.5">
                                            <StaticImage
                                                src="../images/entry checker.png"
                                                alt="A dinosaur"
                                            />
                                        </div>
                                        <h2 className="text-white text-lg title-font font-medium capitalize">
                                            {fieldValue}
                                        </h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-6 text-white">
                                            Blue bottle crucifix vinyl
                                            post-ironic four dollar toast vegan
                                            taxidermy. Gastropub indxgo juice
                                            poutine.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-lime-400 font-medium text-black flex-shrink-0">
                                                {totalCount}
                                            </div>
                                            <Link
                                                key={fieldValue}
                                                to={`/topics/${kebabCase(
                                                    fieldValue
                                                )}`}
                                            >
                                                <button className="flex items-center justify-between bg-yellow-400 border-0 py-0.5 px-3 focus:outline-none hover:bg-lime-600 rounded-3xl text-black font-medium hover:text-white mt-4 md:mt-0">
                                                    Browse →
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </Layout>
);

export default TagsPage;

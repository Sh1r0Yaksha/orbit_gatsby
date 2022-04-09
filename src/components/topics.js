import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { StaticImage } from "gatsby-plugin-image";

const Topics = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(limit: 6) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
                totalCount
            }
        }
    `);
    return (
        <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-20 bg-gray-700">
            <div className="lg:py-12 py-6 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h2 className="title-font font-heads text-2xl mb-4 font-medium text-white">
                        Browse Topics
                    </h2>
                    <p className="md:mb-6 font-medium leading-6">
                        Here are some topics that we love to discuss, explore
                        them from inside to land on your interest...
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {data.allMdx.group.map(({ fieldValue, totalCount }) => (
                        <div className="p-2 md:w-1/3 sm:w-1/2 ">
                            <div className="flex rounded-2xl h-full bg-gray-800 p-4 flex-col">
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
                                        Blue bottle crucifix vinyl post-ironic
                                        four dollar toast vegan taxidermy.
                                        Gastropub indxgo juice poutine.
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
                <div className="flex justify-center lg:mt-10 mt-6">
                    <Link to="/topics/">
                        <button className="flex items-center justify-between bg-lime-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Topics;

import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Projects = () => {
    return (
        <Layout pageTitle="Projects">
            <Seo
                title="Projects"
                description="I keep uploading some of my projects here, you can browse through them and their docs..."
                pathname={`projects/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        Projects Created By Me
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        I keep uploading some of my projects here, you can
                        browse through them and their docs...
                    </p>
                    <div className="flex justify-center">
                        <Link to="/topics/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Topics
                            </button>
                        </Link>
                        <Link to="/blog/">
                            <button className="ml-2 flex items-center justify-between bg-lime-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                Blog
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-52 bg-gray-800">
                    <div className="lg:py-12 py-6 mx-auto orb-page">
                        <p className="text-center">
                            I will be soon be sharing many of my projcets made
                            here. Stay tuned!
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Projects;

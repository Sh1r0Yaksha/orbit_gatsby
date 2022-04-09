import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <Seo
                title="Ajay Choudhury"
                description="Hi! I am Ajay Choudhury. I regularly add content out of my knowledge and experience on this blog. Here is a quick introduction about me and my fields of interest."
                pathname={`about/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        About Me
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        Hi! I am Ajay Choudhury. I regularly add content out of
                        my knowledge and experience on this blog. Here is a
                        quick introduction about me and my fields of interest.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/portfolio/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Portfolio
                            </button>
                        </Link>
                        <Link to="/projects/">
                            <button className="ml-2 flex items-center justify-between bg-lime-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                Projects
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-52 bg-gray-800">
                    <div className="lg:py-12 py-6 mx-auto">
                        <p>
                            We will be sharing our whole story later on, about
                            how we started with this site, what are our goals,
                            how we are moving towards our goals, what we do, how
                            we manage everything and much more about us here. So
                            if you like our content and our way of presenting it
                            you can follow me on Twitter and Instagram. You can
                            bookmark OrbitGadget for more fresh contents from
                            us.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AboutPage;

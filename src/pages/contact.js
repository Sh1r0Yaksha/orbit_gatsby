import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Contact = () => {
    return (
        <Layout pageTitle="About Me">
            <Seo
                title="Contact"
                description="Contact us for queries regarding privacy policy, site terms, content issues, advertising, feedback or any other genuine concern. We are happy to help."
                pathname={`contact/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        Contact
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        Contact us for queries regarding privacy policy, site
                        terms, content issues, advertising, feedback or any
                        other genuine concern. We are happy to help.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/site-terms/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Site Terms
                            </button>
                        </Link>
                        <Link to="/blog/">
                            <button className="ml-2 flex items-center justify-between bg-lime-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                Browse Blog
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-52 bg-gray-800">
                    <div className="lg:py-12 py-6 mx-auto orb-page">
                        <p>
                            Feel free to contact us at OrbitGadget using the
                            form below for any general query regarding the site,
                            to report technical problems, and inquires related
                            to promotion or collaboration. We respond to valid
                            queries in an elaborate manner. We are happy to get
                            connected to you.
                        </p>
                        <p>
                            If you have any suggestions, questions, or feedback
                            regarding this site, please sum it up and contact us
                            using the form below. We value all of our readers
                            and their suggestions. We will try to get back to
                            you within a day.
                        </p>
                        <p>
                            Please try to be as detailed as possible in your
                            email if you are asking a question or reporting a
                            problem, such that we can reply to you with an
                            appropriate and meaningful answer to your questions.
                        </p>
                        <p>
                            Please be patient after sending an email to us, we
                            always reply to emails, but it may take some time to
                            get back to you (at most 24 hrs.). Kindly wait for
                            our reply before sending another email. If you want
                            to know more about this site’s working principles
                            head to Privacy Policy and Site-terms.
                        </p>
                        <p>
                            We really appreciate your support for OrbitGadget
                            and we urge you to continue exploring OrbitGadget
                            and consider subscribing to our notifications to
                            stay updated.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;

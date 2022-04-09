import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Contribute = () => {
    return (
        <Layout pageTitle="Contribute">
            <Seo
                title="Contribute"
                description="If you liked our content and wish to thank us, you can consider supporting us with donations."
                pathname={`contribute/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        Contribute
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        If you liked our content and wish to thank us, you can
                        consider supporting us with donations.
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
                            If you like our content or our style of presentation
                            and want to contribute some content through us to
                            our readers, we whole-heartedly welcome you. If you
                            feel you will be able to contribute quality contents
                            through us to our readers you can contact us, we
                            will welcome you aboard.
                        </p>
                        <p>
                            You can also support and appreciate our work by
                            donating a small amount on our PayTM or Google Pay.
                            It won’t take even a minute! Be sure to include a
                            message, we never forget to feature our supporters
                            on our page. You ca scan the QR codes below to
                            donate:
                        </p>
                        <p>
                            If you are unable to support us with money, it is
                            not a problem at all, we value your love and
                            appreciation more than money. You can still support
                            us by:
                        </p>

                        <ul>
                            <li>
                                Sharing our articles on your social media
                                handles.
                            </li>
                            <li>Commenting on our posts.</li>
                            <li>
                                Following us on our Instagram and subscribing us
                                on YouTube.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contribute;

import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const SiteTerms = () => {
    return (
        <Layout pageTitle="Site Terms">
            <Seo
                title="Site Terms"
                description="Terms and conditions of using our services and resources."
                pathname={`site-terms/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        Site Terms
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        Terms and conditions of using our services and
                        resources.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/privacy-policy/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Privacy Policy
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
                            By accessing this Website, (accessible from
                            https://orbitgadget.com), you are agreeing to be
                            bound by these Website Terms and Conditions of Use
                            and agree that you are responsible for the agreement
                            with any applicable local laws. If you disagree with
                            any of these terms, you are prohibited from
                            accessing this site. The materials contained in this
                            Website are protected by copyright and trademark
                            law.
                        </p>
                        <h2>Use License</h2>
                        <p>
                            Permission is granted to temporarily download one
                            copy of the materials on OrbitGadget’s Website for
                            personal, non-commercial transitory viewing only.
                            This is the grant of a license, not a transfer of
                            title, and under this license you may not:
                        </p>
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>
                                use the materials for any commercial purpose or
                                for any public display;
                            </li>
                            <li>
                                attempt to reverse engineer any software
                                contained on OrbitGadget’s Website;
                            </li>
                            <li>
                                remove any copyright or other proprietary
                                notations from the materials; or
                            </li>
                            <li>
                                transferring the materials to another person or
                                “mirror” the materials on any other server.
                            </li>
                        </ul>
                        <p>
                            This will let OrbitGadget terminate upon violations
                            of any of these restrictions. Upon termination, your
                            viewing right will also be terminated and you should
                            destroy any downloaded materials in your possession
                            whether it is printed or electronic format.
                        </p>
                        <h2>Disclaimer</h2>
                        <p>
                            All the materials on OrbitGadget’s Website are
                            provided “as is”. OrbitGadget makes no warranties,
                            may it be expressed or implied, therefore negates
                            all other warranties. Furthermore, OrbitGadget does
                            not make any representations concerning the accuracy
                            or reliability of the use of the materials on its
                            Website or otherwise relating to such materials or
                            any sites linked to this Website.
                        </p>
                        <h2>Limitations</h2>
                        <p>
                            OrbitGadget or its suppliers will not be hold
                            accountable for any damages that will arise with the
                            use or inability to use the materials on
                            OrbitGadget’s Website, even if OrbitGadget or an
                            authorize representative of this Website has been
                            notified, orally or written, of the possibility of
                            such damage. Some jurisdiction does not allow
                            limitations on implied warranties or limitations of
                            liability for incidental damages, these limitations
                            may not apply to you.
                        </p>
                        <h2>Revisions and Errata</h2>
                        <p>
                            The materials appearing on OrbitGadget’s Website may
                            include technical, typographical, or photographic
                            errors. OrbitGadget will not promise that any of the
                            materials in this Website are accurate, complete, or
                            current. OrbitGadget may change the materials
                            contained on its Website at any time without notice.
                            OrbitGadget does not make any commitment to update
                            the materials.
                        </p>
                        <h2>Site Terms of Use Modifications</h2>
                        <p>
                            OrbitGadget may revise these Terms of Use for its
                            Website at any time without prior notice. By using
                            this Website, you are agreeing to be bound by the
                            current version of these Terms and Conditions of
                            Use.
                        </p>
                        <h2>Your Privacy</h2>
                        <p>
                            Please read our Privacy Policy to have a clear
                            picture about the operation of OrbitGadget.
                        </p>
                        <h2>Governing Law</h2>
                        <p>
                            Any claim related to OrbitGadget’s Website shall be
                            governed by the laws of in without regard to its
                            conflict of law provisions.
                        </p>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any queries regarding the privacy policy
                            or terms of use, kindly drop us an email here.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SiteTerms;

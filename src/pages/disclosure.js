import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Disclosure = () => {
    return (
        <Layout pageTitle="Disclosure">
            <Seo
                title="Disclosure"
                description="A detailed disclosure of what sources and services we are using to serve our content and information."
                pathname={`disclosure/`}
            />
            <div className="bg-gray-700">
                <div className="xl:container mx-auto px-2 md:px-4 xl:px-20 py-12 text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-medium text-white">
                        Disclosure
                    </h1>
                    <p className="md:mb-6 font-medium leading-6 text-gray-200 lg:max-w-3xl mx-auto">
                        A detailed disclosure of what sources and services we
                        are using to serve our content and information.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/site-terms/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Site Terms
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
                        <p>
                            All the information on this website (accessible at
                            https://orbitgadget.com), is published in good faith
                            and for general information purpose only.
                            OrbitGadget does not make any warranties about the
                            completeness, reliability, and accuracy of this
                            information. Any action you take upon the
                            information you find on this website (OrbitGadget),
                            is strictly at your own risk. OrbitGadget will not
                            be liable for any losses and/or damages in
                            connection with the use of our website.
                        </p>
                        <p>
                            From our website, you can visit other websites by
                            following hyperlinks to such external sites. While
                            we strive to provide only quality links to useful
                            and ethical websites, we have no control over the
                            content and nature of these sites. These links to
                            other websites do not imply a recommendation for all
                            the content found on these sites. Site owners and
                            content may change without notice and may occur
                            before we have the opportunity to remove a link
                            which may have gone ‘bad’.
                        </p>
                        <p>
                            Please be also aware that when you leave our
                            website, other sites may have different privacy
                            policies and terms which are beyond our control.
                            Please be sure to check their Privacy Policies as
                            well as their “Terms of Service” before engaging in
                            any business or uploading any information.
                        </p>
                        <h2>Affiliate Disclosure</h2>
                        <p>
                            We often review products and prepare buyer’s guides
                            for our readers. If we find a good product and the
                            merchant or seller selling it offers an affiliate
                            program, we refer those products to our readers via
                            the affiliate links, which means if you buy the
                            products or services we recommend through one of
                            those links, you won’t pay a penny more, but as an
                            affiliate, I may receive a small commission or some
                            form of compensation which helps us keep our good
                            work on.
                        </p>
                        <h2>Major platforms</h2>
                        <h3>1. Amazon Assocoates</h3>
                        <p>
                            We are an Amazon Associate, we earn a small
                            commission from qualifying purchases made through
                            our affiliate links. These affiliate links are
                            generally the product links in our buying guides and
                            product reviews.
                        </p>
                        <p>
                            When you buy the products we recommend through our
                            affiliate links on Amazon, you do not need to pay
                            even a penny more for it, but as an affiliate, we
                            receive a small commission for our recommendations.
                            Basically, it is a win-win situation for both of us.
                            Thanks for the support!
                        </p>
                        <h2>Why this Affiliate Disclosure?</h2>
                        <p>
                            This blog (OrbitGadget) is proudly owned by an
                            Indian. So, technically we are not required to
                            comply with the FTC Affiliate Disclosure policy.
                            But, I believe in transparency and I feel it is the
                            right thing to do. We keep our readers informed such
                            that you can build trust with us.
                        </p>
                        <p>
                            We never try to represent wrong products or services
                            that are inappropriate or valueless, just to receive
                            an affiliate commission. We only recommend products
                            that provide some value to users, and affiliate
                            commissions are secondary.
                        </p>
                        <h2>Consent</h2>
                        <p>
                            By using our website, you hereby consent to our
                            disclaimer and agree to its terms and our privacy
                            policy.
                        </p>
                        <h2>Update</h2>
                        <p>
                            Should we update, amend or make any changes to this
                            document, those changes will be prominently posted
                            here. Be sure to check this page often to note the
                            changes we make in our policies or service.
                        </p>
                        <h2>Contact Us</h2>
                        <p>
                            If you require any more information or have any
                            questions about our site’s disclaimer, please feel
                            free to contact us by email at ask@orbitgadget.com
                            or through our contact form.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Disclosure;

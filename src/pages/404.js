import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const NotFoundPage = () => {
    return (
        <Layout pageTitle="404 Error">
            <div className="bg-gray-800">
                <section className="text-gray-200 body-font xl:container mx-auto px-2 md:px-4 xl:px-52">
                    <div className="lg:py-12 py-6 mx-auto min-h-screen">
                        <h1>Not Found!</h1>
                        <Link to="/">Go Back</Link>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default NotFoundPage;

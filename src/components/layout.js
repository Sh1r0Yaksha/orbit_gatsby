import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <>
            <Navbar />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;

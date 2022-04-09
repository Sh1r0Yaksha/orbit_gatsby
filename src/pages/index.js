import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Topics from "../components/topics";
import BlogHome from "../components/blog_home";
import Projects from "../components/projects";
import Seo from "../components/seo";
import { Helmet } from "react-helmet";

const IndexPage = () => {
    return (
        <Layout pageTitle="A Tech Site for Geeks">
            <Seo title="A Tech Site for Geeks" />
            <Helmet>
                <script type="application/ld+json">
                    {`
                [{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "OrbitGadget",
                "alternateName": "OrbitGadget",
                "url": "https://orbitgadget.com/",
                "logo": "https://orbitgadget.com/logo.svg",
                "sameAs": [
                    "https://instagram.com/orbitgadget",
                    "https://github.com/ajaycc17",
                    "https://linkedin.com/in/ajaycc17",
                    "https://twitter.com/ajaycc17"
                ]
                }]
                `}
                </script>
            </Helmet>
            <Hero />
            <Topics />
            <BlogHome />
            <Projects />
        </Layout>
    );
};

export default IndexPage;

import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const Navbar = () => {
    return (
        <header className="text-white bg-slate-900 body-font">
            <Helmet>
                <script
                    src="https://kit.fontawesome.com/cd04e03c36.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <div className="xl:container px-0 md:px-4 xl:px-20 flex flex-wrap pt-2 md:pt-3 md:pb-3 pb-0 flex-col md:flex-row">
                <div className="fullWidth md:mr-12 flex items-center justify-between pb-2 md:pb-0 md:px-0 px-2 md:border-none border-b-2 border-dashed border-gray-500">
                    <Link
                        to="/"
                        className="flex title-font font-bold items-center text-gray-900 mb-0"
                    >
                        <span className="text-xl text-white font-bold tracking-wide font-logo">
                            <span className="text-yellow-400">O</span>rbit
                            <span className="text-yellow-400">G</span>adget
                        </span>
                    </Link>
                    <span className="md:hidden block">
                        <Link
                            to="https://twitter.com/ajaycc17/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-400"
                        >
                            <i className="fa-brands fa-twitter mr-3"></i>
                        </Link>
                        <Link
                            to="/rss.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-rss"></i>
                        </Link>
                    </span>
                </div>
                <nav className="fullWidth flex md:px-0 px-2 md:ml-auto md:mr-auto overflow-x-scroll justify-between items-center md:text-base text-sm font-semibold md:py-0 py-2">
                    <Link to="/blog/" className="mr-8 hover:text-yellow-400">
                        Blog
                    </Link>
                    <Link to="/topics/" className="mr-8 hover:text-yellow-400">
                        Topics
                    </Link>
                    <Link to="/about/" className="mr-8 hover:text-yellow-400">
                        About
                    </Link>
                    <Link to="/contact/" className="mr-8 hover:text-yellow-400">
                        Contact
                    </Link>
                    <Link
                        to="/projects/"
                        className="md:mr-8 hover:text-yellow-400"
                    >
                        Projects
                    </Link>
                </nav>
                <div className="md:flex items-center justify-end hidden">
                    <Link
                        to="https://twitter.com/ajaycc17/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400"
                    >
                        <i className="fa-brands fa-twitter mr-5"></i>
                    </Link>
                    <Link
                        to="/rss.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-rss"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

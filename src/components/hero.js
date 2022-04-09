import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero = () => {
    return (
        <section className="text-gray-200 body-font xl:container mx-auto bg-gray-800">
            <div className="px-2 md:px-4 xl:px-20 flex py-6 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-4 font-semibold text-white">
                        Let Us Learn and Grow{" "}
                        <span className="text-sky-400">Geek</span>
                    </h1>
                    <p className="md:mb-6 mb-2 font-medium leading-6">
                        The world is on a transition to digital phase. It is the
                        best time to upgrade yourself, be a{" "}
                        <span className="text-lime-400 font-semibold">
                            GEEK
                        </span>{" "}
                        and a proud member of the technical world.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/blog/">
                            <button className="flex items-center justify-between bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-lime-600 rounded-lg text-black font-semibold hover:text-white mt-4 md:mt-0">
                                Browse
                            </button>
                        </Link>
                        <Link to="/about/">
                            <button className="ml-4 flex items-center justify-between bg-transparent border-0 py-1 px-3 focus:outline-none hover:text-lime-400 rounded-lg text-white font-semibold mt-4 md:mt-0">
                                About →
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 w-full w-max-lg">
                    <StaticImage src="../images/hero.png" alt="A dinosaur" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

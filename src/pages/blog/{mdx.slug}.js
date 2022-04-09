import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import kebabCase from "lodash/kebabCase";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.thumbnail);
    const articles = data.navigation.edges;
    var prevInd = -1;
    var nextInd = -1;
    articles.forEach(({ node }, index) => {
        if (data.mdx.slug === node.slug) {
            prevInd = index - 1;
            if (index !== data.navigation.totalCount - 1) {
                nextInd = index + 1;
            }
            return false;
        }
    });
    const recommend = [];
    var i = 0;
    articles.forEach(({ node }) => {
        if (data.mdx.slug !== node.slug) {
            recommend.push({ node });
        }
        if (i <= 4) {
            return false;
        }
        i++;
    });
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Seo
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
                pathname={`blog/${data.mdx.slug}`}
            />
            <section className="text-gray-200 body-font xl:container mx-auto bg-gray-800">
                <div className="px-2 md:px-4 xl:px-20 pt-6">
                    <p className="capitalize font-medium text-gray-400 mb-3">
                        <Link className="text-sky-400" to="/">
                            Home
                        </Link>{" "}
                        •{" "}
                        <Link className="text-sky-400" to="/blog/">
                            Blog
                        </Link>{" "}
                        •{" "}
                        <Link
                            className="text-sky-400"
                            to={`/topics/${kebabCase(
                                data.mdx.frontmatter.tags[0]
                            )}/`}
                        >
                            {data.mdx.frontmatter.tags[0]}
                        </Link>
                    </p>
                    <h1 className="title-font font-heads lg:text-3xl text-2xl mb-2 font-semibold text-white">
                        {data.mdx.frontmatter.title}
                    </h1>
                    <p className="font-heads leading-6 text-gray-200 mb-5">
                        {data.mdx.frontmatter.description}...
                    </p>
                    <p className="flex items-center text-yellow-400 text-sm font-medium font-heads md:mb-2 lg:mb-0">
                        <StaticImage
                            className="w-7 h-7 mr-2 object-cover object-center rounded-full"
                            src="../../images/Ajay Choudhury.png"
                            alt="A dinosaur"
                        />
                        Ajay Choudhury • {data.mdx.frontmatter.date} •{" "}
                        {data.mdx.timeToRead} mins Read
                    </p>
                </div>
                <div className="px-2 md:px-4 xl:px-20 flex py-6 flex-row gap-4">
                    <div className="lg:w-2/3 w-full">
                        <GatsbyImage className="mb-3" image={image} />
                        <div className="orb-blog-content">
                            <MDXRenderer>{data.mdx.body}</MDXRenderer>
                        </div>
                        {data.mdx.frontmatter.tags ? (
                            <div>
                                <p className="pt-3 font-medium font-heads text-yellow-400">
                                    Tags:{" "}
                                </p>
                                <ul className="my-3 list-none flex">
                                    {data.mdx.frontmatter.tags.map((tag) => (
                                        <li
                                            className="mr-2 px-3 text-sm bg-gray-900 rounded-lg text-sky-400 font-medium capitalize"
                                            key={tag + `tag`}
                                        >
                                            <Link
                                                to={`/topics/${kebabCase(
                                                    tag
                                                )}/`}
                                            >
                                                {tag}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        <div className="border-y-2 border-dashed border-gray-500 mt-6 py-3">
                            <section className="py-3">
                                <div className="bg-gray-900 rounded-2xl py-6 px-4 flex flex-col md:flex-row mx-0">
                                    <div className="md:w-1/6 flex items-center justify-center">
                                        <StaticImage
                                            className="rounded-full"
                                            src="../../images/Ajay Choudhury.png"
                                            alt="Ajay Choudhury"
                                            width={100}
                                        />
                                    </div>
                                    <div className="md:w-5/6 md:pl-4">
                                        <div>
                                            <div className="pb-2 flex flex-col md:flex-row justify-between items-center">
                                                <h4 className="text-lg font-medium mb-0 text-sky-400 font-heads">
                                                    Ajay Choudhury
                                                </h4>
                                                <span className="md:pr-4">
                                                    <Link
                                                        className="text-gray-300 hover:text-yellow-400 pl-0"
                                                        to="https://twitter.com/ajaycc17"
                                                    >
                                                        <i className="bi bi-twitter"></i>
                                                    </Link>
                                                    <Link
                                                        className="text-gray-300 hover:text-yellow-400 pl-4"
                                                        to="https://linkedin.com/in/ajaycc17"
                                                    >
                                                        <i className="bi bi-linkedin"></i>
                                                    </Link>
                                                    <Link
                                                        className="text-gray-300 hover:text-yellow-400 pl-4"
                                                        to="https://www.youtube.com/channel/UCC8-qS8viHF1cqiG0MKbCGQ"
                                                    >
                                                        <i className="bi bi-youtube"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                            <p className="authBio mb-0 text-center md:text-left">
                                                A learner and a student of
                                                technlogy. He loves sharing
                                                experiences and learning with
                                                others through his projects and
                                                blog. Along with technology, he
                                                loves playing football and
                                                enjoys listening to music and
                                                podcasts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <section className="pb-3 pt-6">
                            <div className="flex sm:flex-row flex-col gap-3">
                                <div className="sm:w-1/2">
                                    {prevInd !== -1 ? (
                                        <Link
                                            to={`/blog/${articles[prevInd].node.slug}/`}
                                            className="text-yellow-400"
                                        >
                                            <div className="rounded-2xl h-full bg-gray-900 p-4 flex flex-col items-start">
                                                <p className="font-medium mb-2 text-white">
                                                    {
                                                        articles[prevInd].node
                                                            .frontmatter.title
                                                    }
                                                </p>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="bg-yellow-400 text-black py-0 rounded-3xl px-3 font-medium"
                                                    >
                                                        ← Previous
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : null}
                                </div>
                                <div className="sm:w-1/2">
                                    {nextInd !== -1 ? (
                                        <Link
                                            to={`/blog/${articles[nextInd].node.slug}/`}
                                            className="text-yellow-400"
                                        >
                                            <div className="rounded-2xl h-full bg-gray-900 p-4 flex flex-col items-end">
                                                <p className="font-medium mb-2 text-end text-white">
                                                    {
                                                        articles[nextInd].node
                                                            .frontmatter.title
                                                    }
                                                </p>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="bg-yellow-400 text-black py-0 rounded-3xl px-3 font-medium"
                                                    >
                                                        Next →
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : null}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="hidden lg:w-1/3 lg:block border-l-2 border-dashed border-gray-500 pl-4">
                        {/* recommended posts */}
                        <div className="text-white mb-6">
                            <h3 className="border-b-2 border-dashed border-gray-400 inline pb-1 font-heads text-lg font-semibold">
                                Recommended:
                            </h3>
                            <div className="mt-3">
                                {recommend.map(({ node }) => (
                                    <Link
                                        className="flex items-center p-4 rounded-xl bg-gray-700 mb-2"
                                        to={`/blog/${node.slug}`}
                                    >
                                        <i className="bi bi-arrow-right-circle-fill pr-3 text-lg text-yellow-400"></i>
                                        <div>
                                            <p className="mb-0 font-medium text-white capitalize">
                                                {node.frontmatter.title}
                                            </p>
                                            <small className="text-white">
                                                <small className="bg-green-800 px-2 py-0.5 rounded mr-0.5 text-xs font-medium">
                                                    {node.frontmatter.date}
                                                </small>{" "}
                                                {node.frontmatter.tags ? (
                                                    <div className="inline">
                                                        {node.frontmatter.tags.map(
                                                            (tag) => (
                                                                <Link
                                                                    to={`/topics/${kebabCase(
                                                                        tag
                                                                    )}/`}
                                                                >
                                                                    <small className="bg-slate-800 px-2 mr-1 py-0.5 rounded text-xs font-medium capitalize">
                                                                        {tag}
                                                                    </small>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                ) : null}
                                            </small>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* all topics */}
                        <div className="mb-6 text-white">
                            <h3 className="border-b-2 border-dashed border-gray-500 inline pb-1 font-heads text-lg font-semibold">
                                Topics:
                            </h3>
                            <div className="mt-3">
                                <p className="mb-0 leading-7">
                                    <ul className="my-3 list-none flex flex-wrap">
                                        {data.topics.group.map(
                                            ({ fieldValue }) => (
                                                <li
                                                    className="mr-2 mb-2 px-3 text-sm bg-red-700 rounded-lg text-white font-medium capitalize"
                                                    key={
                                                        fieldValue +
                                                        `fieldValue`
                                                    }
                                                >
                                                    <Link
                                                        to={`/topics/${kebabCase(
                                                            fieldValue
                                                        )}/`}
                                                    >
                                                        {fieldValue}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </p>
                            </div>
                        </div>
                        {/* share buttons */}
                        <div className="mb-6 text-white">
                            <h3 className="border-b-2 border-dashed border-gray-500 inline pb-1 font-heads text-lg font-semibold">
                                Share:{" "}
                            </h3>
                            <div className="flex justify-between items-center flex-wrap pt-3">
                                <Link
                                    className="pb-2 pr-2"
                                    to="https://www.facebook.com/sharer/sharer.php?u=https://orbitgadget.com/blog/{{post.slug}}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="bg-blue-600 px-2 font-semibold font-heads rounded py-0.5">
                                        <i className="bi bi-facebook pr-1"></i>
                                        Share
                                    </span>
                                </Link>

                                <Link
                                    className="pb-2 pr-2"
                                    to="https://twitter.com/intent/tweet?url=https://orbitgadget.com/blog/{{post.slug}}&text="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="bg-sky-500 px-2 font-semibold font-heads rounded py-0.5">
                                        <i className="bi bi-twitter pr-1"></i>
                                        Tweet
                                    </span>
                                </Link>

                                <Link
                                    className="pb-2 pr-2"
                                    to="https://api.whatsapp.com/send?text=https://orbitgadget.com/blog/{{post.slug}}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="bg-green-600 px-2 font-semibold font-heads rounded py-0.5">
                                        <i className="bi bi-whatsapp pr-1"></i>
                                        Share
                                    </span>
                                </Link>

                                <Link
                                    className="pb-2 pr-2"
                                    to="https://t.me/share/url?url=https://orbitgadget.com/blog/{{post.slug}}&text={{post.title}}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="bg-blue-800 px-2 font-semibold font-heads rounded py-0.5">
                                        <i className="bi bi-telegram pr-1"></i>
                                        Share
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                tags
                description
                thumbnail {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
            timeToRead
            slug
        }
        navigation: allMdx(
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    slug
                    frontmatter {
                        title
                        date(formatString: "MMM, YYYY")
                        tags
                    }
                }
            }
            totalCount
        }
        topics: allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
            totalCount
        }
    }
`;

export default BlogPost;

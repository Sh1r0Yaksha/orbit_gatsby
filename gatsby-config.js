module.exports = {
    siteMetadata: {
        title: "OrbitGadget",
        siteUrl: `https://orbitgadget.com`,
        description: `OrbitGadget is a tech and study-oriented site and blog for geeks, learners and tech enthusiasts. We always love being surrounded by gadgets, codes, algorithms and ideas.`,
        author: `Ajay Choudhury`,
        social: {
            twitter: `ajaycc17`,
        },
        keywords: `cse, computers, coding, algorithms, code, hacking`,
        image: `src/images/hero.png`,
    },
    trailingSlash: "always",
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("autoprefixer"),
                ],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                          </svg>`,
                            className: `anchor`,
                            maintainCase: false,
                            removeAccents: true,
                            isIconAfterHeader: true,
                            elements: [`h2`, `h3`, `h4`, `h5`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: { sh: "bash", js: "javascript" },
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords:
                                                /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OrbitGadget`,
                short_name: `OrbitGadget`,
                start_url: `/`,
                background_color: `#1e293b`,
                theme_color: `#facc15`,
                display: `standalone`,
                icon: `src/images/orbitgadget.png`,
                theme_color_in_head: false,
                cache_busting_mode: "none",
            },
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        title: "OrbitGadget RSS Feed",
                        output: "rss.xml",
                        query: `
                  {
                    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
                      nodes {
                        frontmatter {
                          title
                          date(formatString: "MMMM D, YYYY")
                          description
                        }
                        slug
                        excerpt(pruneLength: 150)
                        html
                      }
                    }
                  }
                  `,
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                                    guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                                    custom_elements: [
                                        { "content:encoded": node.html },
                                    ],
                                });
                            });
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://orbitgadget.com",
                sitemap: "https://orbitgadget.com/sitemap/sitemap-index.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
    ],
};

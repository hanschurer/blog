module.exports = {
  siteMetadata: {
    title: `Han Wang`,
    image: "/gatsby-icon.png",
    description: `古往今来，光阴之叹`,
    siteUrl: `https://gatsby-starter-breeze.netlify.app/`,
    social: {
      douban: "#",
      email: "#",
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
      rss: "/rss.xml",
      telegram: "#",
      twitter: "#",
      youtube: "#",
    },
    sidebarMenu: [
      { url: "/archive/", label: "Archive" },
      { url: "/tags/", label: "Tags" },
      { url: "/about", label: "About" },
    ],
    footerHTML: `© 2021 Power by <a href="https://www.gatsbyjs.com/">Gatsby</a> Theme <a href="https://github.com/keithnull/gatsby-starter-breeze">Breeze</a> `,
    dateFormat: `YYYY-MM-DD`,
    language: `zh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: "table table-hover",
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                  filter: {frontmatter: {layout: {ne: "page"}}},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                        date
                      }
                      frontmatter {
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "清风朗月",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Breeze`,
        short_name: `Breeze`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand`, `Noto Serif SC`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-gitalk",
      options: {
        config: {
          clientID: "572974cd02e04369be95",
          clientSecret: "c370f905a4e7b95f83ca001e9e8fc99cc6fdcf7c",
          repo: "blog",
          owner: "hanwangxxx",
          admin: ["hanwangxxx"],
          pagerDirection: "last",
          createIssueManually: true,
          distractionFreeMode: true,
          enableHotKey: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

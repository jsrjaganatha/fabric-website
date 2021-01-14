import { graphql, useStaticQuery } from 'gatsby'

const capailitiesQuery = graphql`
    {
        capabilities: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/capabilities/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        icon {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
`

export const useCapabilities = () => {
    const { capabilities } = useStaticQuery(capailitiesQuery)
    return capabilities.edges.map(({ node }) => ({ ...node.frontmatter, html: node.html }))
}

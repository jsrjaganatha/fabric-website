import { graphql, useStaticQuery } from 'gatsby'

const brochuresQuery = graphql`{
    brochures: allBrochuresYaml {
        edges {
            node {
                title
                url
            }
        }
    }
}`

export const useBrochures = () => {
    const { brochures } = useStaticQuery(brochuresQuery)
    return brochures.edges.map(({ node }) => node)
}

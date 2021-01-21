import { graphql, useEffect, useMemo, useStaticQuery } from 'gatsby'

const solicitationsQuery = graphql`{
  solicitations: allSolicitationsYaml {
    edges {
      node {
        name
        url
        sortDate
        displayDate
      }
    }
  }
}`

export const useSolicitations = () => {
  const { solicitations } = useStaticQuery(solicitationsQuery)
  const now = new Date()

  const current = solicitations.edges.map(({ node }) => node).filter(solicitation => {
    const deadline = new Date(solicitation.sortDate)
    return deadline > now
  }).sort((s, t) => new Date(s.sortDate) - new Date(t.sortDate))

  const expired = solicitations.edges.map(({ node }) => node).filter(solicitation => {
    const deadline = new Date(solicitation.sortDate)
    return deadline <= now
  }).sort((s, t) => new Date(s.sortDate) - new Date(t.sortDate))

  return { current, expired }
}

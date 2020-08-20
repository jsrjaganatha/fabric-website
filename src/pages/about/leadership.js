import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Subheading } from '../../components/typography'
import { useLeadership, useWindowWidth } from '../../hooks'

const LeaderPhoto = styled(Img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 2rem;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.2)) saturate(0.5);
    transition: filter 250ms;
`

const Profile = styled.article`
    // border: 1px solid #f99;
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    justify-content: center;
    align-items: ${ props => props.compact ? 'center' : 'flex-start' };;
    margin-bottom: 3rem;
    &:hover ${ LeaderPhoto } {
        filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.2)) saturate(1.0);
    }
`

const LeaderName = styled(Subheading)`
    margin-bottom: 1rem;
`

const LeaderBio = styled.div``

const LeaderDetails = styled.div`
    flex: 1;
`

const LeadershipPage = () => {
    const { isCompact } = useWindowWidth()
    const leaders = useLeadership()

    return (
        <AnimateOnMount>
            <SEO
                title="Leadership Team"
                description="" 
                keywords={ [] }
            />
            
            <Title>Leadership Team</Title>
            
            <section>
                {
                    leaders.map(member => (
                        <Profile compact={ isCompact }>
                            <LeaderPhoto fixed={ member.frontmatter.photo.childImageSharp.fixed } />
                            <LeaderDetails>
                                <LeaderName center={ isCompact }>{ member.frontmatter.name }</LeaderName>
                                <LeaderBio dangerouslySetInnerHTML={{ __html: member.html }} />
                            </LeaderDetails>
                        </Profile>
                    ))
                }
            </section>
            
        </AnimateOnMount>

    )
}

export default LeadershipPage

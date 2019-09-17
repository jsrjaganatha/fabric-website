import React from 'react'
import { graphql, Link } from 'gatsby'
import { FadeOnMount } from '../components/Anim'
import { Title, Meta } from '../components/Typography'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../components/HorizontalRule'

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { prev, next } = pageContext

    return (
        <FadeOnMount>
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ frontmatter.title }</Title>
                    <Meta>Published on { frontmatter.date }</Meta>
                    <Meta>Tags: { frontmatter.tags.length > 0 ? frontmatter.tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` } style={{ marginRight: '0.25rem' }}>{ tag }</Link>) : '∅' }</Meta>
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
            
            <HorizontalRule />

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    {
                        prev && <Link to={ prev.frontmatter.path }>
                            PREVIOUS <Visible md lg xl>ARTICLE</Visible><br/>
                            <Meta>{ prev.frontmatter.title }</Meta>
                        </Link>
                    }
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    {
                        next && <Link to={ next.frontmatter.path }>
                            NEXT <Visible md lg xl>ARTICLE</Visible><br/>
                            <Meta>{ next.frontmatter.title }</Meta>
                        </Link>
                    }
                </div>
            </div>
        </FadeOnMount>
    )
}

export const newsItemQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
            }
        }
    }
`
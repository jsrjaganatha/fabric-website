import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'

const Links = styled(Paragraph).attrs({ center: true })`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`

const BrandingPage = () => (
    <AnimateOnMount>
        <SEO
            title="FABRIC Branding Resources"
            description="Branding and PR resources for FABRIC."
            keywords={ ["branding", "logos", "color", "graphics", "style"] }
        />

        <Title>Branding</Title>
        
        <section>
            <Heading>Style</Heading>
            <Paragraph>
                View resources relating to FABRIC's style guidelines, including color palettes and type faces.
                In addition, you will find details on using these together to create components for the web, such as buttons.
            </Paragraph>
            <Links>
                <Link to="/branding/style">FABRIC Styles</Link>
                <Link to="/branding/style">FAB Styles</Link>
            </Links>
        </section>

        <section>
            <Heading>Logos</Heading>
            <Paragraph>
                View and learn how to properly use approved FABRIC logos for print and web media.
            </Paragraph>
            <Links>
                <Link to="/branding/fabric-logos">FABRIC Logos</Link>
                <Link to="/branding/fab-logos">FAB Logos</Link>
            </Links>
        </section>

        <section>
            <Heading>PR Resources</Heading>
            <Paragraph>
                Here you will find assets for describing FABRIC in print and web media.
            </Paragraph>
            <Links>
                <Link to="/branding/style">FABRIC PR Resources</Link>
                <Link to="/branding/style">FAB PR Resources</Link>
            </Links>
        </section>

    </AnimateOnMount>

)

export default BrandingPage

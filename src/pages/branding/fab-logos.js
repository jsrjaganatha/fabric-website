import React, { Fragment } from 'react'
import { AnimateOnMount } from '../../components/anim'
import styled from 'styled-components'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'
import { ButtonLink } from '../../components/button'
import { Module } from '../../components/layout'
import { Container, Col, Row } from 'react-grid-system'

const LogoContainer = styled.div`
    background-color: ${ props => props.background ? props.background : 'transparent' };
    border: 1px solid var(--color-black);
    border-radius: 0.25rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    justiify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 16rem;
    & img {
        display: block;
        margin: auto;
    }
`

const LogoBlock = ({ url, altText, background }) => {
    return (
        <Fragment>
            <LogoContainer background={ background }>
                <img src={ url } alt={ altText }/>
            </LogoContainer>
            <Paragraph center>
                <a href={ url } target="_blank" rel="noopener noreferrer">Download</a>
            </Paragraph>
        </Fragment>
    )
}

const FabLogosPage = () => (
    <AnimateOnMount>
        <SEO
            title="Logos"
            description="Logos and branding resources for FAB."
            keywords={ ["branding", "logos", "style", "FAB", "FABRIC Across Borders"] }
        />

        <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
            <Title>FAB Logos</Title>
            <ButtonLink to="/branding/fabric-logos" primary>View FABRIC Logos</ButtonLink>
        </div>

        <br />

        <Paragraph>
            Like the FABRIC logo, the FAB Globe logo comes in different variants to suit several use cases.
            Note that each of the logos has a transparent background and are optimized for use on either light of dark background colors.
        </Paragraph>

        <Module title="For Light Backgrounds">
            <Paragraph>
                Each of these logos has a transparent background and are optimized for use on light background colors.
            </Paragraph>

            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 6 }>
                        <LogoBlock
                            url="https://www.dropbox.com/s/4cw1nuxsavva1u2/New%20FAB%20Official%20Logo_Color.png?raw=1"
                            altText="FAB Globe with text - Color"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 6 }>
                        <LogoBlock background="#eeefff"
                            url="https://www.dropbox.com/s/v8k3spmrhpwknff/New%20FAB%20Official%20Logo_Dark.png?raw=1"
                            altText="FAB Globe with text - Black only"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 6 }>
                        <LogoBlock background="#bbddee"
                            url="https://www.dropbox.com/s/lns4mkwnd8oc71b/202101_FAB_globe%20icon%20color%40300x.png?raw=1"
                            altText="FAB Globe"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 6 }>
                        <LogoBlock background="#bbddee"
                            url="https://www.dropbox.com/s/iigjdmo4e81eink/202101_FAB_%20globe%20icon_DARK%40300x.png?raw=1"
                            altText="FAB Globe"
                        />
                    </Col>
                </Row>
            </Container>

        </Module>


        <Module title="For Dark Backgrounds">
            <Paragraph>
                Each of thes logos has a transparent background and are optimized for use on dark background colors.
            </Paragraph>

            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 6 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/7nydw2bxffkubji/New%20FAB%20Official%20Logo_light.png?raw=1"
                            altText="FAB Globe"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 3 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/fa16l6knrgdhp9s/202101_FAB_Globe%20icon_light%40300x.png?raw=1"
                            altText="FAB Globe"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 3 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/0vq767ba2ksd0b9/202101_FAB_Globe%20Icon_Color%20light%40300x.png?raw=1"
                            altText="FAB Globe"
                        />
                    </Col>
                </Row>
            </Container>
        </Module>

    </AnimateOnMount>

)

export default FabLogosPage

import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title } from '../../components/typography'
import { useBrochures } from '../../hooks'
import { DocumentLink } from '../../components/link'

const BrochuresPage = props => {
    const brochures = useBrochures()

    return (
        <AnimateOnMount>
            <SEO
                title="Brochures"
                description=""
            />
            
            <Title>Brochures</Title>

            {
                brochures.map((brochure, i) => (
                    <div key={ i } style={{ display: 'flex' }}>
                        <DocumentLink to={ brochure.url } docType="PDF">{ brochure.title }</DocumentLink>
                    </div>
                ))
            }

        </AnimateOnMount>
    )
}

export default BrochuresPage

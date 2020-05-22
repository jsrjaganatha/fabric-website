import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title } from '../../components/typography'
import { useWorkshopReports } from '../../hooks'
import { DocumentLink } from '../../components/link'

const WorkshopReportsPage = props => {
    const reports = useWorkshopReports()

    return (
        <AnimateOnMount>
            <SEO
                title="Workshop Reports"
                description=""
            />
            
            <Title>Workshop Reports</Title>

            {
                reports.map((report, i) => (
                    <DocumentLink key={ i } to={ report.url } docType="pdf">{ report.title }</DocumentLink>
                ))
            }

        </AnimateOnMount>

    )
}

export default WorkshopReportsPage

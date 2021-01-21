import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../components/anim'
import { SEO } from '../components/seo'
import { Title, Heading, Paragraph } from '../components/typography'
import HubspotForm from 'react-hubspot-form'
import { HorizontalRule } from '../components/horizontal-rule'
import { ExternalLink } from '../components/link'
import { IconButton } from '../components/button'
import { ChevronDownIcon, ChevronUpIcon } from '../components/icons'
import { useSolicitations } from '../hooks'
import { LinkIcon } from '../components/icons'

const Table = styled.table`
  border: 2px solid var(--color-primary-light);
  font-size: 95%;
  & > thead {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  & td, th {
    padding: 0.5rem 1rem;
  }
  & tr.expired-note {
    background-color: var(--color-dark);
    color: var(--color-white);
  }
  & tr.expired {
    background-color: var(--color-lightgrey);
  }
`

const Toggler = styled.button.attrs({ role: 'button' })`
  width: 100%;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: var(--color-white);
  transition: color 250ms;
  &:hover {
    color: var(--color-primary-light);
  }
`

const GetInvolvedPage = () => {
  const solicitations = useSolicitations()
  const [open, setOpen] = useState(false)

  const handleToggleOpportunities = () => setOpen(!open)

  const FundingOpportunitiesToggler = useMemo(() => {
    return (
      <Toggler onClick={ handleToggleOpportunities } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem' }}>
        <em>{ open ? 'Hide' : 'View' } Expired Opportunities</em>
        { open ? <ChevronUpIcon fill="var(--color-white)" /> : <ChevronDownIcon fill="var(--color-white)" /> }
      </Toggler>
    )
  }, [open])

  return (
    <AnimateOnMount>
      <SEO
        title="Get Involved" 
        description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
        keywords={ ["collaboration", "contact"] }
      />
      
      <Title>Get Involved with FABRIC</Title>

      <Heading>Funding Opportunities</Heading>

      <Paragraph>
        Do you have a project idea that would benefit from using FABRIC?
        We are interested in working with you. Check out the funding opportunities below.
      </Paragraph>

      <Table>
        <thead>
          <tr>
            <th width="25%">Solicitation</th>
            <th></th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {
            solicitations.current.map(({ name, url, displayDate }, i) => (
              <tr key={ i } className="current">
                <td><ExternalLink to={ url }>{ name }</ExternalLink></td>
                <td><ExternalLink to={ url }><LinkIcon size={ 24 } fill="var(--color-primary)" /></ExternalLink></td>
                <td>{ displayDate }</td>
              </tr>
            ))
          }
          <tr className="expired-note">
            <td colspan="3" style={{ padding: 0 }}>
              { FundingOpportunitiesToggler }
            </td>
          </tr>
          {
            open && solicitations.expired.map(({ name, url, displayDate }, i) => (
              <tr key={ i } className="expired">
                <td><ExternalLink to={ url }>{ name }</ExternalLink></td>
                <td><ExternalLink to={ url }><LinkIcon size={ 24 } fill="var(--color-primary)" /></ExternalLink></td>
                <td>{ displayDate }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      <Heading>Learn More</Heading>
      
      <Paragraph>
        Interested in learning more about FABRIC?
        Sign up here to receive email announcements and be the first to hear about our community workshops, events, and news!
      </Paragraph>
      
      <br/>

      <HorizontalRule />
      
      <br/>
      
      <HubspotForm
        portalId='6342968'
        formId='05693d2f-b08d-4def-8fa7-d31d54c74a59'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
      />
    </AnimateOnMount>
  )
}

export default GetInvolvedPage

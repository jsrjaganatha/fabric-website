import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Module } from '../layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import { MapPhase1 } from './map-phase-1'
import { MapPhase2 } from './map-phase-2'
import { MapPhase3 } from './map-phase-3'

const Tabs = styled.article`
    display: flex;
    margin: 6rem 0 0 0;
    display: flex;
    justify-content: center;
    width: 100%;
`

const Tab = styled(Button)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 250ms ease-out;
    cursor: pointer;
    padding: ${ props => props.compact ? '0.25rem' : '0.5rem 1rem' };
    margin: 0 0.25rem;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: var(--color-primary);
    border-radius: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: none;
    background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-light)' };
    color: ${ props => props.active ? 'var(--color-light)' : 'var(--color-primary)' };
    &:hover, &:focus {
        background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-primary-light)' } !important;
        color: ${ props => props.active ? 'var(--color-light)' : 'var(--color-primary-dark)' } !important;
        box-shadow: none;
    }
`

export const MapModule = props => {
    const [tabIndex, setTabIndex] = useState(0)
    const handleToggleTab = newIndex => event => setTabIndex(newIndex)
    return (
      <Module title="Anticipated FABRIC Topology">
          <Tabs>
            <Tab key="map-phase-1" onClick={ handleToggleTab(0) } active={ tabIndex === 0 }>Phase 1</Tab>
            <Tab key="map-phase-2" onClick={ handleToggleTab(1) } active={ tabIndex === 1 }>Phase 2</Tab>
            <Tab key="map-phase-3" onClick={ handleToggleTab(2) } active={ tabIndex === 2 }>FABRIC Across Borders</Tab>
          </Tabs>
            { tabIndex === 0 && <MapPhase1 />}
            { tabIndex === 1 && <MapPhase2 />}
            { tabIndex === 2 && <MapPhase3 />}
          <img src={ fabricMapSvg } alt="" style={{ width: '100%' }}/>
      </Module>
    )
}

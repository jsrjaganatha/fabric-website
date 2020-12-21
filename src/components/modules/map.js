import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Module } from '../layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import { MapPhase2 } from './map-phase-2'

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
const Content = styled.div`
    border: 1px solid var(--color-primary);
    border-radius: 0.25rem;
    padding: 2rem 2rem 0 2rem;
    z-index: 99;
`

class MapModule extends React.Component  {
  state = { 
    tabIndex: 1,
  }
  
  handleToggleTab = (newIndex) => { 
    this.setState({ tabIndex: newIndex }) 
  }
  
  render() {
    return (
      <Module title="Anticipated FABRIC Topology">
          <img src={ fabricMapSvg } alt="" style={{ width: '100%' }}/>
          <Tabs>
            <Tab key="map-phase-1" onClick={ this.handleToggleTab(1) } active compact={ true }>Phase 1</Tab>
            <Tab key="map-phase-2" onClick={ this.handleToggleTab(2) } compact={ true }>Phase 2</Tab>
            <Tab key="map-phase-3" onClick={ this.handleToggleTab(3) } compact={ true }>FABRIC Across Borders</Tab>
          </Tabs>
          <Content>
            { this.state.tabIndex === 2 && <MapPhase2 />}
          </Content>
      </Module>
    )
  }
}

export default MapModule;
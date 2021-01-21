import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Module } from '../layout'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

import { MapPhase3 } from './map-phase-3'
import fabricMapLegend1 from "../../images/fabric-map/map-legend-phase1.png"
import fabricMapLegend2 from "../../images/fabric-map/map-legend-phase2.png"

import { topomap } from "../../data/topomap.js"

const geoUrl = {
  "phase1": "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
  "phase2": "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
};

const Tabs = styled.article`
    display: flex;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
`
const Tab = styled(Button)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    : transform 250ms ease-out;
    cursor: pointer;
    padding: ${ props => props.compact ? '0.25rem' : '0.5rem 1rem' };
    margin: 0 0.25rem;
    border-width: 1px;
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
    const [tabIndex, setTabIndex] = useState(1)
    const dataset = ["phase1", "phase2"]
    const handleToggleTab = newIndex => event => setTabIndex(newIndex)
    return (
      <Module title="Anticipated FABRIC Topology" className="fabric-map-container">
          <Tabs>
            <Tab key="map-phase-1" onClick={ handleToggleTab(0) } active={ tabIndex === 0 }>Phase 1</Tab>
            <Tab key="map-phase-2" onClick={ handleToggleTab(1) } active={ tabIndex === 1 }>Phase 2</Tab>
            <Tab key="map-phase-3" onClick={ handleToggleTab(2) } active={ tabIndex === 2 }>FABRIC Across Borders</Tab>
          </Tabs>
          <div className="fabric-map">
            { tabIndex === 2 && <MapPhase3 />}
            { tabIndex !== 2 && 
            <ComposableMap projection="geoAlbersUsa" width={800} height={500} >
              <Geographies geography={geoUrl[dataset[tabIndex]]}>
                {({ geographies }) => (
                  <>
                    {geographies.map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#cde4ef"
                      />
                    ))}
                  </>
                )}
              </Geographies>

              {
                tabIndex === 0 && topomap.dotted_lines.map(({ from, to }) => (
                  <Line
                    key={`dotted-line-${from}-to-${to}`}
                    from={topomap.coordinates[from]}
                    to={topomap.coordinates[to]}
                    stroke="#27aae1"
                    strokeWidth={2}
                    strokeDasharray="3"
                  />
                ))
              }

              {topomap.lines[dataset[tabIndex]].map(({ from, to }) => (
                <Line
                  key={`line-${from}-to-${to}`}
                  from={topomap.coordinates[from]}
                  to={topomap.coordinates[to]}
                  stroke="#27aae1"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}

            {
              topomap.lines_super[dataset[tabIndex]] &&
              topomap.lines_super[dataset[tabIndex]].map(({ from, to }) => (
                <Line
                  key={`super-line-${from}-to-${to}`}
                  from={topomap.coordinates[from]}
                  to={topomap.coordinates[to]}
                  stroke="#ffde17"
                  strokeWidth={8}
                  strokeLinecap="round"
                />
              ))
              }

              {topomap.core_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={topomap.coordinates[name]} data-tip="Core Connectors: 10">
                  <circle r={6} fill="#078ac1" />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fill: "#5D5A6D", fontSize: ".7rem", fontWeight: "800" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}

              {topomap.edge_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={topomap.coordinates[name]} data-tip="Core Connectors: 10">
                  <circle r={3} fill="#27aae1" />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fill: "#5D5A6D", fontSize: ".5rem", fontWeight: "600" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}

              {
                topomap.facilities[dataset[tabIndex]] &&
                topomap.facilities[dataset[tabIndex]].map(({ name, markerOffset }) => (
                  <Marker key={name} coordinates={topomap.coordinates[name]}>
                    <g
                      fill="none"
                      stroke="#FF5533"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(-12, -24)"
                    >
                      <circle cx="12" cy="10" r="3" fill="#f26522"/>
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                      textAnchor="middle"
                      y={markerOffset}
                      style={{ fill: "#f26522", fontSize: ".5rem", fontWeight: "600" }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))
              }
        </ComposableMap>
        }
        </div>
        { tabIndex === 0 && <img src={fabricMapLegend1} alt="" style={{ width: "80%" }} /> }
        { tabIndex === 1 && <img src={fabricMapLegend2} alt="" style={{ width: "80%" }} /> }
      </Module>
    )
}

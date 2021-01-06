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
import ReactTooltip from "react-tooltip";

const geoUrl = {
  "phase1": "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
  "phase2": "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
};

const coordinates = {
  "Salt Lake City": [-111.891045, 40.760780],
  "Kansas City": [-94.5786, 39.0997],
  "New York": [-74.005974, 40.712776],
  "Atlanta": [-84.3880, 33.7490],
  "Seattle": [-122.3321, 47.6062],
  "STARLIGHT": [-87.6173, 41.8962],
  "Washington": [-77.0369, 38.9072],
  "MGHPCC": [-72.6162, 42.2043],
  "Starlight": [-87.6173, 41.8962],
  // not actuall coordinates (for display purpose):
  "FIU/AMPATH": [-81.1918, 27.2617],
  "San Diego": [-116.1611, 34.7157],
  "LBNL": [-122.2730, 37.8715],
  "SRI/Stanford": [-121.1697, 36.4275],
  "UCSD/SDSC": [-117.1611, 32.7157],
  "UCSD": [-117.1611, 32.7157],
  "SDSC": [-116.8611, 32.7157],
  "Utah": [-113.9019, 40.8938],
  "CLOUDLAB/POWDER": [-113.9019, 40.9938],
  "CLOUDLAB/POWDER/UEN": [-113.9019, 40.9938],
  "GPN": [-94.5786, 41.0997],
  "Dallas": [-95.3698, 29.7604],
  "TACC": [-97.743057, 32.267153],
  "TACC/CHAMELEON": [-97.743057, 32.267153],
  "LEARN": [-98.3987, 29.0889],
  "Indiana": [-91.8173, 42.5062],
  "UKY": [-92.6173, 44.2062],
  "UMich": [-90.5073, 43.8962],
  "NCSA": [-88.207458, 44.3125],
  "Ga Tech/SOX": [-83.8880, 35.5490],
  "Clemson": [-81.8374, 33.0834],
  "CLOUDLAB": [-81.8374, 33.0834],
  "PSC": [-77.9959, 40.4406],
  "RENCI": [-80.1077, 38.0525],
  "MAX": [-77.8077, 36.3525],
  "Rutgers": [-75.6162, 42.2043],
  "Princeton": [-74.6162, 43.2043],
  "UMass": [-72.6162, 42.2043],
  "CHAMELEON": [-86.6298, 41.8781],
  "COSMOS": [-75.9162, 42.2043],
}

const core_nodes = {
  "phase1": [
    { markerOffset: 25, name: "Salt Lake City" },
    { markerOffset: 20, name: "Dallas" },
    { markerOffset: 20, name: "Starlight" },
    { markerOffset: -15, name: "Washington" },
  ],
  "phase2": [
    { markerOffset: 25, name: "Salt Lake City" },
    { markerOffset: 25, name: "Kansas City" },
    { markerOffset: 18, name: "New York" },
    { markerOffset: 27, name: "Atlanta" },
    { markerOffset: -15, name: "Seattle" },
    { markerOffset: -15, name: "San Diego" },
    { markerOffset: 20, name: "Dallas" },
    { markerOffset: 20, name: "Starlight" },
    { markerOffset: 18, name: "Washington" },
  ],
};

const edge_nodes = {
  "phase1": [
    { markerOffset: 15, name: "LBNL" },
    { markerOffset: 15, name: "RENCI" },
    { markerOffset: -8, name: "UKY" },
    { markerOffset: 25, name: "FIU/AMPATH" },
    { markerOffset: -10, name: "NCSA" },
    { markerOffset: -8, name: "UMich" },
    { markerOffset: 15, name: "MAX" },
    { markerOffset: 15, name: "Utah" },
    { markerOffset: -10, name: "TACC" },
    { markerOffset: 15, name: "UMass" },
    { markerOffset: -10, name: "Ga Tech/SOX" },
    { markerOffset: 15, name: "Clemson" },
    { markerOffset: 15, name: "GPN" },
    { markerOffset: -10, name: "UCSD" },
  ],
  "phase2": [
    { markerOffset: 25, name: "FIU/AMPATH" },
    { markerOffset: 15, name: "LBNL" },
    { markerOffset: 15, name: "SRI/Stanford" },
    { markerOffset: 15, name: "UCSD/SDSC" },
    { markerOffset: 15, name: "Utah" },
    { markerOffset: -10, name: "GPN" },
    { markerOffset: 15, name: "TACC" },
    { markerOffset: 15, name: "LEARN" },
    { markerOffset: -8, name: "Indiana" },
    { markerOffset: -8, name: "UKY" },
    { markerOffset: -8, name: "UMich" },
    { markerOffset: 12, name: "NCSA" },
    { markerOffset: -10, name: "Ga Tech/SOX" },
    { markerOffset: 10, name: "Clemson" },
    { markerOffset: 12, name: "MAX" },
    { markerOffset: 12, name: "RENCI" },
    { markerOffset: 12, name: "PSC" },
    { markerOffset: 10, name: "Rutgers" },
    { markerOffset: -8, name: "Princeton" },
    { markerOffset: 12, name: "UMass" },
  ],
};

const facilities = {
  "phase1": [
   { markerOffset: -25, name:"CLOUDLAB/POWDER/UEN" },
  ],
  "phase2": [
    { markerOffset: -25, name: "TACC/CHAMELEON" },
    { markerOffset: -25, name: "NCSA" },
    { markerOffset: -28, name:"MGHPCC" },
    { markerOffset: -25, name:"LBNL" },
    { markerOffset: -23, name:"PSC" },
    { markerOffset: -25, name:"CLOUDLAB/POWDER" },
    { markerOffset: -23, name:"SDSC" },
    { markerOffset: -23, name:"CHAMELEON" },
    { markerOffset: -23, name:"COSMOS" },
    { markerOffset: -25, name:"CLOUDLAB" },
  ],
};

const lines = {
  "phase1": [
    // core - core
    { from: "STARLIGHT", to: "Washington" },
    { from: "STARLIGHT", to: "Dallas" },
    { from: "STARLIGHT", to: "Salt Lake City" },
    // core - edge
    { from: "RENCI", to: "Washington" },
    { from: "MAX", to: "Washington" },
    { from: "Starlight", to: "UKY" },
    { from: "Starlight", to: "UMich" },
    { from: "Starlight", to: "NCSA" },
    { from: "TACC", to: "Dallas" },
    { from: "Utah", to: "Salt Lake City" },
  ],
  "phase2": [
    // core - core
    { from: "Seattle", to: "Salt Lake City" },
    { from: "Seattle", to: "San Diego" },
    { from: "San Diego", to: "Salt Lake City" },
    { from: "San Diego", to: "Dallas" },
    { from: "Salt Lake City" , to: "Kansas City" },
    { from: "Dallas", to: "Atlanta" },
    { from: "Kansas City", to: "Starlight" },
    { from: "Kansas City", to: "Dallas" },
    { from: "Starlight", to: "Atlanta" },
    { from: "Starlight", to: "Washington" },
    { from: "Starlight", to: "New York" },
    { from: "Washington", to: "New York"},
    { from: "Washington", to: "Atlanta"},
    { from: "FIU/AMPATH",to: "Atlanta"},
    // core - edge
    { from: "LBNL",to: "San Diego"},
    { from: "SRI/Stanford",to: "San Diego"},
    { from: "UCSD/SDSC",to: "San Diego"},
    { from: "Utah", to: "Salt Lake City" },
    { from: "Kansas City", to: "GPN" },
    { from: "TACC", to: "Dallas" },
    { from: "LEARN", to: "Dallas" },
    { from: "Starlight", to: "Indiana" },
    { from: "Starlight", to: "UKY" },
    { from: "Starlight", to: "UMich" },
    { from: "Starlight", to: "NCSA" },
    { from: "Clemson", to: "Atlanta"},
    { from: "Ga Tech/SOX", to: "Atlanta"},
    { from: "PSC", to: "Washington" },
    { from: "RENCI", to: "Washington" },
    { from: "MAX", to: "Washington" },
    { from: "Rutgers", to: "New York" },
    { from: "Princeton", to: "New York" },
    { from: "UMass", to: "New York" },
  ],
}

const lines_super = {
  "phase1": [],
  "phase2": [
    { from: "Starlight", to:  "Washington" },
    { from: "Dallas", to: "Starlight" },
    { from: "San Diego", to: "Dallas" },
  ],
}

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
            <ComposableMap projection="geoAlbersUsa" width="800" height="500" >
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

              {lines[dataset[tabIndex]].map(({ from, to }) => (
                <Line
                  key={`line-${from}-to-${to}`}
                  from={coordinates[from]}
                  to={coordinates[to]}
                  stroke="#27aae1"
                  strokeWidth={1}
                  strokeLinecap="round"
                />
              ))}

            {
              lines_super[dataset[tabIndex]] &&
              lines_super[dataset[tabIndex]].map(({ from, to }) => (
                <Line
                  key={`super-line-${from}-to-${to}`}
                  from={coordinates[from]}
                  to={coordinates[to]}
                  stroke="#ffde17"
                  strokeWidth={8}
                  strokeLinecap="round"
                />
              ))
              }

              {core_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={coordinates[name]} data-tip="Core Connectors: 10">
                  <circle r={7} fill="#078ac1" />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".7rem", fontWeight: "800" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}

              {edge_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={coordinates[name]} data-tip="Core Connectors: 10">
                  <circle r={5} fill="#27aae1" />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".5rem", fontWeight: "600" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}

              {
                facilities[dataset[tabIndex]] &&
                facilities[dataset[tabIndex]].map(({ name, markerOffset }) => (
                  <Marker key={name} coordinates={coordinates[name]}>
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
                      style={{ fontFamily: "system-ui", fill: "#f26522", fontSize: ".5rem", fontWeight: "600" }}
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
        <ReactTooltip />
      </Module>
    )
}

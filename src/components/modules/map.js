import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Module } from '../layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Annotation,
} from "react-simple-maps";
import { MapPhase3 } from './map-phase-3'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const coordinates = {
  "Dallas": [-96.7970, 32.7767],
  "Salt Lake City": [-111.891045, 40.760780],
  "Kansas City": [-94.5786, 39.0997],
  "New York": [-74.005974, 40.712776],
  "Atlanta": [-84.3880, 33.7490],
  "Seattle": [-122.3321, 47.6062],
  "San Diego": [-117.1611, 32.7157],
  "Houston": [-95.3698, 29.7604],
  "LEARN": [-95.3698, 29.7604],
  "STARLIGHT": [-87.6173, 41.8962],
  "Washington": [-77.0369, 38.9072],
  "TACC": [-97.743057, 30.267153],
  "LBNL": [-122.2730, 37.8715],
  "CHAMELEON": [-87.6298, 41.8781],
  "PSC": [-79.9959, 40.4406],
  "COSMOS": [-74.4518, 40.4862],
  "MGHPCC": [-72.6162, 42.2043],
  "NCSA": [-88.207458, 40.112461],
  "SDSC": [-117.2713, 32.8328],
  "LBNL": [-122.2730, 37.8715],
  "MAX": [-77.1773, 38.9339],
  "Chicago": [-87.6173, 41.8962],
}

const core_nodes = {
  "phase1": [
    { markerOffset: -20, name: "Salt Lake City" },
    { markerOffset: 20, name: "Dallas" },
    { markerOffset: -20, name: "STARLIGHT" },
    { markerOffset: 20, name: "Washington" },
  ],
  "phase2": [
    { markerOffset: -20, name: "Salt Lake City" },
    { markerOffset: -20, name: "Kansas City" },
    { markerOffset: -20, name: "New York" },
    { markerOffset: 25, name: "Atlanta" },
    { markerOffset: -20, name: "Seattle" },
    { markerOffset: 25, name: "San Diego" },
    { markerOffset: 20, name: "Houston" },
    { markerOffset: -20, name: "Chicago" },
    { markerOffset: 25, name: "Washington" },
  ],
};

const edge_nodes = {
  "phase1": [
    { markerOffset: 5, name: "TACC" },
    { markerOffset: 5, name: "NCSA" },
    { markerOffset: 5, name: "LEARN" },
    { markerOffset: -25, name:"MAX" },
  ],
  "phase2": [
    { markerOffset: -25, name: "TACC" },
    { markerOffset: 5, name: "NCSA" },
    { markerOffset: -25, name:"MGHPCC" },
    { markerOffset: -25, name:"LBNL" },
    { markerOffset: 5, name:"PSC" }
  ],
};

const lines = {
  "phase1": [
    { from: "STARLIGHT", to: "Washington" },
    { from: "STARLIGHT", to: "Dallas" },
    { from: "STARLIGHT", to: "Salt Lake City" },
  ],
  "phase2": [
    { from: "Seattle", to: "Salt Lake City" },
    { from: "Seattle", to: "San Diego" },
    { from: "San Diego", to: "Salt Lake City" },
    { from: "San Diego", to: "Houston" },
    { from: "Salt Lake City" , to: "Kansas City" },
    { from: "Houston", to: "Atlanta" },
    { from: "Kansas City", to: "Chicago" },
    { from: "Kansas City", to: "Houston" },
    { from: "Chicago", to: "Atlanta" },
    { from: "Chicago", to: "Washington" },
    { from: "Chicago", to: "New York" },
    { from: "Washington", to: "New York"},
    { from: "Washington", to: "Atlanta"},
  ],
}

const lines_super = {
  "phase1": [],
  "phase2": [
    { from: "Chicago", to:  "Washington" },
    { from: "Houston", to: "Chicago" },
    { from: "San Diego", to: "Houston" },
  ],
}

const annotations = {
  "phase1": [],
  "phase2": [
    {
      city: "Chicago",
      dx: -50,
      dy: -80,
      textAnchor: "end",
      content: [
        "STARLIGHT",
        "CHAMELEON",
        "MERIT",
        "WISCNET",
        "KYRON"
      ]
    },
    {
      city: "Salt Lake City",
      dx: 40,
      dy: 40,
      textAnchor: "start",
      content: [
        "UEN",
        "CLOUDLAB",
        "POWDER",
      ]
    },
    {
      city: "San Diego",
      dx: 40,
      dy: -25,
      textAnchor: "start",
      content: [
        "SDSC",
        "PRP/NRP",
        "CENIC",
      ]
    },
    {
      city: "Atlanta",
      dx: 40,
      dy: 20,
      textAnchor: "start",
      content: [
        "AMLIGHT",
        "SOX",
        "FLR",
      ]
    },
    {
      city: "New York",
      dx: 20,
      dy: 30,
      textAnchor: "start",
      content: [
        "COSMOS",
        "NYSERNET",
        "NEREN",
        "NJEDGE"
      ]
    },
    {
      city: "Washington",
      dx: 30,
      dy: 80,
      textAnchor: "start",
      content: [
        "3ROX",
        "MAX",
        "WIX",
        "KINBER",
        "NCREN"
      ]
    },
    {
      city: "Kansas City",
      dx: -30,
      dy: 30,
      textAnchor: "end",
      content: [
        "FRGP",
        "GPN",
      ]
    },
    {
      city: "Houston",
      dx: 35,
      dy: -5,
      textAnchor: "start",
      content: [
        "LEARN",
      ]
    },
  ]
}

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
    const [tabIndex, setTabIndex] = useState(1)
    const dataset = ["phase1", "phase2", "fab"]
    const handleToggleTab = newIndex => event => setTabIndex(newIndex)
    return (
      <Module title="Anticipated FABRIC Topology">
          <Tabs>
            <Tab key="map-phase-1" onClick={ handleToggleTab(0) } active={ tabIndex === 0 }>Phase 1</Tab>
            <Tab key="map-phase-2" onClick={ handleToggleTab(1) } active={ tabIndex === 1 }>Phase 2</Tab>
            <Tab key="map-phase-3" onClick={ handleToggleTab(2) } active={ tabIndex === 2 }>FABRIC Across Borders</Tab>
          </Tabs>
          <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
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
            annotations[dataset[tabIndex]] && 
            annotations[dataset[tabIndex]].map(({city, dx, dy, textAnchor, content}) => {
              let annotations_y = -10
              return (
                <Annotation
                  key={`${city}-${content}`}
                  subject={coordinates[city]}
                  dx={dx}
                  dy={dy}
                  connectorProps={{
                    stroke: "#FF5533",
                    strokeWidth: 1,
                    strokeLinecap: "round",
                    strokeDasharray: "4",
                  }}
                >  
                  {
                    content.map((c) => {
                      annotations_y += 12;
                      return(
                      <text
                        y={annotations_y}
                        textAnchor={textAnchor}
                        alignmentBaseline="middle"
                        fill="#F53"
                        style={{
                          fontFamily: "system-ui",
                          fill: "#f26522",
                          fontSize: ".6rem",
                          fontWeight: "600",
                        }}>
                        {c}
                      </text>
                    )})
                  }
                </Annotation>
              )
            })
          }

          {lines[dataset[tabIndex]].map(({ from, to }) => (
            <Line
              key={`line-${from}-to-${to}`}
              from={coordinates[from]}
              to={coordinates[to]}
              stroke="#27aae1"
              strokeWidth={2.5}
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
              strokeWidth={10}
              strokeLinecap="round"
            />
           ))
          }

          {core_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
            <Marker key={name} coordinates={coordinates[name]}>
              <circle r={8} fill="#27aae1" />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".8rem", fontWeight: "600" }}
              >
                {name}
              </text>
            </Marker>
          ))}

          {edge_nodes[dataset[tabIndex]].map(({ name, markerOffset }) => (
            <Marker key={name} coordinates={coordinates[name]}>
              <g transform="translate(-12, -24)">
                <circle cx="12" cy="10" r="5" fill="#f26522" />
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#f26522", fontSize: ".6rem", fontWeight: "600" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </Module>
    )
}

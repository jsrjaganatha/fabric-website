import React from 'react'
import { Module } from '../layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const coordinates = {
  "Salt Lake City": [-111.891045, 40.760780],
  "Kansas City": [-94.5786, 39.0997],
  "New York": [-74.005974, 40.712776],
  "Atlanta": [-84.3880, 33.7490],
  "Seattle": [-122.3321, 47.6062],
  "San Diego": [-117.1611, 32.7157],
  "Houston": [-95.3698, 29.7604],
  "Starlight": [-87.6173, 41.8962],
  "Washington": [-77.0369, 38.9072],
  "TACC": [-97.743057, 30.267153],
  "LBNL": [null],
  "CHAMELEON": [-87.6298, 41.8781],
  "PSC": [null],
  "COSMOS": [-74.4518, 40.4862],
  "MGHPCC": [-72.6162, 42.2043],
  "NCSA": [-88.207458, 40.112461],
  "SDSC": [-117.2713, 32.8328],
}

const core_nodes = [
  { markerOffset: 20, name: "Salt Lake City" },
  { markerOffset: 20, name: "Kansas City" },
  { markerOffset: 20, name: "New York" },
  { markerOffset: 20, name: "Atlanta" },
  { markerOffset: 20, name: "Seattle" },
  { markerOffset: 20, name: "San Diego" },
  { markerOffset: 20, name: "Houston" },
  { markerOffset: 20, name: "Starlight" },
  { markerOffset: 20, name: "Washington" },
];

const edge_nodes = [
  { markerOffset: 15, name: "TACC" },
  { markerOffset: 15, name: "NCSA" },
  { markerOffset: -30, name: "CHAMELEON" },
  { markerOffset: -30, name: "COSMOS" },
  { markerOffset: -30, name:"MGHPCC" },
  { markerOffset: -30, name:"SDSC" }
];


const lines_dedicated = [
  { from: "Seattle", to: "Salt Lake City" },
  { from: "Seattle", to: "San Diego" },
  { from: "San Diego", to: "Salt Lake City" },
  { from: "San Diego", to: "Houston" },
  { from: "Salt Lake City" , to: "Kansas City" },
  { from: "Houston", to: "Atlanta" },
  { from: "Kansas City", to: "Starlight" },
  { from: "Kansas City", to: "Houston" },
  { from: "Starlight", to: "Atlanta" },
  { from: "Starlight", to: "Washington" },
  { from: "Starlight", to: "New York" },
  { from: "Washington", to: "New York"},
  { from: "Washington", to: "Atlanta"},
]

const lines_super = [
  { from: "Starlight", to:  "Washington" },
  { from: "Houston", to: "Starlight" },
  { from: "San Diego", to: "Houston" },
]

export const MapModule = props => {
    return (
        <Module title="Anticipated FABRIC Topology">
            <img src={ fabricMapSvg } alt="" style={{ width: '100%' }}/>
            <ComposableMap projection="geoAlbersUsa">
              <Geographies geography={geoUrl}>
                {({ geographies }) => (
                  <>
                    {geographies.map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        // stroke="#FFF"
                        geography={geo}
                        fill="#cde4ef"
                      />
                    ))}
                  </>
                )}
              </Geographies>

              {lines_dedicated.map(({ from, to }) => (
                <Line
                  key={`line-${from}-to-${to}`}
                  from={coordinates[from]}
                  to={coordinates[to]}
                  stroke="#c7c7c7"
                  strokeWidth={1}
                  strokeLinecap="round"
                />
              ))}

              {lines_super.map(({ from, to }) => (
                <Line
                  key={`super-line-${from}-to-${to}`}
                  from={coordinates[from]}
                  to={coordinates[to]}
                  stroke="#ffde17"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              ))}

              {core_nodes.map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={coordinates[name]}>
                  <circle r={8} fill="#27aae1" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".8rem" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
              {edge_nodes.map(({ name, markerOffset }) => (
                <Marker key={name} coordinates={coordinates[name]}>
                  <g
                    fill="none"
                    stroke="#f26522"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
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

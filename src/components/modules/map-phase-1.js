import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Annotation,
} from "react-simple-maps";

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
  "LBNL": [null],
  "CHAMELEON": [-87.6298, 41.8781],
  "PSC": [null],
  "COSMOS": [-74.4518, 40.4862],
  "MGHPCC": [-72.6162, 42.2043],
  "NCSA": [-88.207458, 40.112461],
  "SDSC": [-117.2713, 32.8328],
  "LBNL": [-122.2730, 37.8715],
  "MAX": [-77.1773, 38.9339],
}

const core_nodes = [
  { markerOffset: -20, name: "Salt Lake City" },
  { markerOffset: 20, name: "Dallas" },
  { markerOffset: -20, name: "STARLIGHT" },
  { markerOffset: 20, name: "Washington" },
];

const edge_nodes = [
  { markerOffset: 5, name: "TACC" },
  { markerOffset: 5, name: "NCSA" },
  { markerOffset: 5, name: "LEARN" },
  { markerOffset: -25, name:"MAX" },
];


const lines_dedicated = [
  { from: "STARLIGHT", to: "Washington" },
  { from: "STARLIGHT", to: "Dallas" },
  { from: "STARLIGHT", to: "Salt Lake City" },
]

export const MapPhase1 = props => {
  return (
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

          {lines_dedicated.map(({ from, to }) => (
            <Line
              key={`line-${from}-to-${to}`}
              from={coordinates[from]}
              to={coordinates[to]}
              stroke="#27aae1"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          ))}

          {core_nodes.map(({ name, markerOffset }) => (
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

          {edge_nodes.map(({ name, markerOffset }) => (
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
  )
}

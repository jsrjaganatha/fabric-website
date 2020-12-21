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
  "Salt Lake City": [-111.891045, 40.760780],
  "Kansas City": [-94.5786, 39.0997],
  "New York": [-74.005974, 40.712776],
  "Atlanta": [-84.3880, 33.7490],
  "Seattle": [-122.3321, 47.6062],
  "San Diego": [-117.1611, 32.7157],
  "Houston": [-95.3698, 29.7604],
  "Chicago": [-87.6173, 41.8962],
  "Washington": [-77.0369, 38.9072],
  "TACC": [-97.743057, 30.267153],
  "LBNL": [null],
  "CHAMELEON": [-87.6298, 41.8781],
  "PSC": [null],
  "COSMOS": [-74.4518, 40.4862],
  "MGHPCC": [-72.6162, 42.2043],
  "NCSA": [-88.207458, 40.112461],
  "SDSC": [-117.2713, 32.8328],
  "LBNL": [-122.2730, 37.8715]
}

const core_nodes = [
  { markerOffset: -20, name: "Salt Lake City" },
  { markerOffset: -20, name: "Kansas City" },
  { markerOffset: -20, name: "New York" },
  { markerOffset: -20, name: "Atlanta" },
  { markerOffset: -20, name: "Seattle" },
  { markerOffset: 25, name: "San Diego" },
  { markerOffset: 20, name: "Houston" },
  { markerOffset: -20, name: "Chicago" },
  { markerOffset: -20, name: "Washington" },
];

const edge_nodes = [
  { markerOffset: -25, name: "TACC" },
  { markerOffset: 5, name: "NCSA" },
  { markerOffset: -25, name:"MGHPCC" },
  { markerOffset: -25, name:"LBNL" },
  // { markerOffset: -30, name:"SDSC" },
  // { markerOffset: -30, name: "CHAMELEON" },
  // { markerOffset: -30, name: "COSMOS" },
];


const lines_dedicated = [
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
]

const lines_super = [
  { from: "Chicago", to:  "Washington" },
  { from: "Houston", to: "Chicago" },
  { from: "San Diego", to: "Houston" },
]

const annotations = [
  {
    city: "Chicago",
    dx: -50,
    dy: -35,
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
    dx: 30,
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
    dy: -20,
    textAnchor: "start",
    content: [
      "SDSC",
      "PRP/NRP",
      "CENIC",
    ]
  },
  {
    city: "Atlanta",
    dx: 30,
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
    dx: 30,
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
    dx: 10,
    dy: 30,
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
    dx: -10,
    dy: 30,
    textAnchor: "end",
    content: [
      "FRGP",
      "GPN",
    ]
  },
  {
    city: "Houston",
    dx: 30,
    dy: -10,
    textAnchor: "start",
    content: [
      "LEARN",
    ]
  },
]

export const MapPhase2 = props => {
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

          {annotations.map(({city, dx, dy, textAnchor, content}) => {
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
              }}
            >  
              {
                content.map((c) => {
                  annotations_y += 10;
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
          )})}

          {lines_dedicated.map(({ from, to }) => (
            <Line
              key={`line-${from}-to-${to}`}
              from={coordinates[from]}
              to={coordinates[to]}
              stroke="#c7c7c7"
              strokeWidth={2}
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
              <circle r={8} fill="#27aae1" />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".8rem", fontWeight: "8600" }}
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

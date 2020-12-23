import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const coordinates = {
  "New York": [-74.005974, 40.712776],
  "Seattle": [-122.3321, 47.6062],
  "Tokyo": [-139.6503, 35.6762],
  "Bristol": [-2.5879, 51.4545],
  "Amsterdam": [4.9041, 52.3676],
  "Geneva": [6.1432, 46.2044],
  "Dallas": [-96.7970, 32.7767],
  "Salt Lake City": [-111.891045, 40.760780],
  "Kansas City": [-94.5786, 39.0997],
  "Atlanta": [-84.3880, 33.7490],
  "San Diego": [-117.1611, 32.7157],
  "Houston": [-95.3698, 29.7604],
  "LEARN": [-95.3698, 29.7604],
  "STARLIGHT": [-87.6173, 41.8962],
  "Washington": [-77.0369, 38.9072],
  "TACC": [-97.743057, 30.267153],
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

const international_nodes = [
  { markerOffset: -25, name: "New York" },
  { markerOffset: -25, name: "Seattle" },
  { markerOffset: -25, name: "Tokyo" },
  { markerOffset: 10, name: "Bristol" },
  { markerOffset: -25, name: "Amsterdam" },
  { markerOffset: 15, name: "Geneva" },
];

const usa_core_nodes = [
  { markerOffset: -8, name: "Salt Lake City" },
  { markerOffset: -8, name: "Kansas City" },
  { markerOffset: 12, name: "Atlanta" },
  { markerOffset: 12, name: "San Diego" },
  { markerOffset: 12, name: "Houston" },
  { markerOffset: -8, name: "Chicago" },
  { markerOffset: 12, name: "Washington" },
]

const international_lines = [
  { from: "Seattle", to: "Tokyo" },
  { from: "New York", to: "Bristol" },
  { from: "New York", to: "Amsterdam" },
  { from: "New York", to: "Geneva" },
]

const usa_lines = [
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


export const MapPhase3 = props => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 350,
        center: [ -60, 20],
      }}
    >
    <ZoomableGroup zoom={1}>
    <Geographies
      geography={geoUrl}
      fill="#cde4ef"
      stroke="#FFFFFF"
      strokeWidth={0.5}
    >
      {({ geographies }) =>
        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>

    {international_lines.map(({ from, to }) => (
      <Line
        key={`line-${from}-to-${to}`}
        from={coordinates[from]}
        to={coordinates[to]}
        stroke="#FF5533"
        strokeWidth={2}
        strokeLinecap="round"
      />
    ))}

    {usa_lines.map(({ from, to }) => (
      <Line
        key={`line-${from}-to-${to}`}
        from={coordinates[from]}
        to={coordinates[to]}
        stroke="#27aae1"
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
          strokeWidth={5}
          strokeLinecap="round"
        />
    ))}
    

    {international_nodes.map(({ name, markerOffset }) => (
      <Marker key={name} coordinates={coordinates[name]}>
         <g
            fill="none"
            stroke="#FF5533"
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
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
      </Marker>
    ))}

    {usa_core_nodes.map(({ name, markerOffset }) => (
      <Marker key={name} coordinates={coordinates[name]}>
        <circle r={3} fill="#27aae1" />
        <text
          textAnchor="middle"
          y={markerOffset}
          style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".5rem", fontWeight: "600" }}
        >
          {name}
        </text>
      </Marker>
    ))}
    </ZoomableGroup>
  </ComposableMap>
  )
}
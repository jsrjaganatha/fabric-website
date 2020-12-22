import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const coordinates = {
  "New York": [-74.005974, 40.712776],
  "Seattle": [-122.3321, 47.6062],
  "Tokyo": [-139.6503, 35.6762],
  "Bristol": [-2.5879, 51.4545],
  "Amsterdam": [4.9041, 52.3676],
  "Geneva": [6.1432, 46.2044],
}

const nodes = [
  { markerOffset: -10, name: "New York" },
  { markerOffset: -20, name: "Seattle" },
  { markerOffset: -20, name: "Tokyo" },
  { markerOffset: 20, name: "Bristol" },
  { markerOffset: -10, name: "Amsterdam" },
  { markerOffset: 20, name: "Geneva" },
];

const lines = [
  { from: "Seattle", to: "Tokyo" },
  { from: "New York", to: "Bristol" },
  { from: "New York", to: "Amsterdam" },
  { from: "New York", to: "Geneva" },
]

export const MapPhase3 = props => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 250,
        center: [ -40, 0]
      }}
    >
    <Graticule stroke="#DDD" />
    <Geographies
      geography={geoUrl}
      fill="#D6D6DA"
      stroke="#FFFFFF"
      strokeWidth={0.5}
    >
      {({ geographies }) =>
        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>

    {lines.map(({ from, to }) => (
      <Line
        key={`line-${from}-to-${to}`}
        from={coordinates[from]}
        to={coordinates[to]}
        stroke="#FF5533"
        strokeWidth={2}
        strokeLinecap="round"
      />
    ))}

    {nodes.map(({ name, markerOffset }) => (
      <Marker key={name} coordinates={coordinates[name]}>
        <circle r={6} fill="#27aae1" />
        <text
          textAnchor="middle"
          y={markerOffset}
          style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".7rem", fontWeight: "600" }}
        >
          {name}
        </text>
      </Marker>
    ))}
  </ComposableMap>
  )
}

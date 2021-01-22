import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";

import fabricMapLegend3 from "../../images/fabric-map/map-legend-phase3.png"

import { topomap } from "../../data/topomap.js"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const MapPhase3 = props => {
  return (
    <div style={{marginTop: "1rem"}} className="fabric-map">
    <ComposableMap
      projection="geoEqualEarth"
      width={800}
      height={500}
      projectionConfig={{
        scale: 300,
        center: [ -55, 15],
      }}
    >
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

    {topomap.international_lines.map(({ from, to }) => (
      <Line
        key={`line-${from}-to-${to}`}
        from={topomap.coordinates[from]}
        to={topomap.coordinates[to]}
        stroke="#FF5533"
        strokeWidth={1}
        strokeLinecap="round"
      />
    ))}

    {topomap.usa_lines.map(({ from, to }) => (
      <Line
        key={`line-${from}-to-${to}`}
        from={topomap.coordinates[from]}
        to={topomap.coordinates[to]}
        stroke="#27aae1"
        strokeWidth={1}
        strokeLinecap="round"
      />
    ))}

    {topomap.usa_lines_super.map(({ from, to }) => (
        <Line
          key={`super-line-${from}-to-${to}`}
          from={topomap.coordinates[from]}
          to={topomap.coordinates[to]}
          stroke="#ffde17"
          strokeWidth={5}
          strokeLinecap="round"
        />
    ))}
    
    {topomap.international_nodes.map(({ name, markerOffset }) => (
      <Marker key={name} coordinates={topomap.coordinates[name]}>
        <circle r={3} fill="#f26522" />
        <text
          textAnchor="middle"
          y={markerOffset}
          style={{ fill: "#5D5A6D", fontSize: ".7rem", fontWeight: "600" }}
        >
          {name}
        </text>
      </Marker>
    ))}

    {topomap.usa_core_nodes.map(({ name, markerOffset }) => (
      <Marker key={name} coordinates={topomap.coordinates[name]}>
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
  </ComposableMap>
  <img src={fabricMapLegend3} alt="" style={{ width: "80%" }} /> 
 </div>
  )
}
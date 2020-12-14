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

const markers = [
  {
    markerOffset: 20,
    name: "Salt Lake City",
    coordinates: [-111.891045, 40.760780]
  },
  { markerOffset: 20, name: "Kansas City", coordinates: [-94.5786, 39.0997] },
  { markerOffset: 20, name: "New York", coordinates: [-74.005974, 40.712776] },
  { markerOffset: 20, name: "Atlanta", coordinates: [-84.3880, 33.7490] },
  { markerOffset: 20, name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { markerOffset: 20, name: "San Diego", coordinates: [-117.1611, 32.7157] },
  { markerOffset: 20, name: "Houston", coordinates: [-95.3698, 29.7604] },
  { markerOffset: 20, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: 20, name: "Washington", coordinates: [-77.0369, 38.9072] },
];

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
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="#27aae1" stroke="#fff" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
        </Module>
    )
}

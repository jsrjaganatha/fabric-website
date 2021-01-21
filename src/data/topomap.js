export const topomap = {
  coordinates: {
    "Salt Lake City": [-111.891045, 40.760780],
    "Kansas City": [-94.5786, 39.0997],
    "New York": [-74.005974, 40.712776],
    "Atlanta": [-84.3880, 33.7490],
    "Seattle": [-122.3321, 47.6062],
    "Washington": [-77.0369, 38.9072],
    "MGHPCC": [-72.6162, 42.2043],
    "StarLight": [-87.6173, 41.8962],
    "University of Tokyo": [-139.6503, 35.6762],
    "University of Bristol": [-2.5879, 51.4545],
    "University of Amsterdam": [4.9041, 52.3676],
    "CERN": [6.1432, 46.2044],
    "FIU": [-80.1918, 25.7617],
    "UMich": [-83.7382, 42.2780],
    "UKY": [-84.5040, 38.0307],
    "RENCI": [-79.0469, 35.9049],
    "RNP&ANSP&RedCLARA": [-46.6333, -23.5505],
    // not actuall coordinates (for display purpose):
    "Clemson": [-82.5369, 34.3738],
    "CLOUDLAB": [-82.5369, 34.3738],
    "Dallas": [-96.7970, 30.7767],
    "FIU&AMPATH": [-81.1918, 27.2617],
    "San Diego": [-116.1611, 34.7157],
    "LBNL": [-122.2730, 37.8715],
    "SRI": [-121.1697, 36.4275],
    "UCSD": [-117.1611, 32.7157],
    "SDSC": [-117.1611, 32.7157],
    "Utah": [-113.9019, 40.8938],
    "CLOUDLAB&POWDER": [-113.9019, 40.9938],
    "GPN": [-94.5786, 41.0997],
    "TACC": [-97.743057, 32.267153],
    "TACC&CHAMELEON": [-97.743057, 32.267153],
    "LEARN": [-98.3987, 29.0889],
    "IU": [-86.8126, 39.1754],
    "NCSA": [-88.707458, 38.3125],
    "GaTech": [-86.0963, 33.9756],
    "PSC": [-78.5959, 40.4406],
    "MAX": [-77.5077, 36.8525],
    "Rutgers": [-75.6162, 42.2043],
    "Princeton": [-74.6162, 43.2043],
    "UMass": [-72.6162, 42.2043],
    "CHAMELEON": [-88.3173, 41.8962],
    "COSMOS": [-75.9162, 42.2043],
  },
  core_nodes: {
    "phase1": [
      { markerOffset: 25, name: "Salt Lake City" },
      { markerOffset: 20, name: "Dallas" },
      { markerOffset: 20, name: "StarLight" },
      { markerOffset: -15, name: "Washington" },
    ],
    "phase2": [
      { markerOffset: 20, name: "Salt Lake City" },
      { markerOffset: 20, name: "Kansas City" },
      { markerOffset: 15, name: "New York" },
      { markerOffset: 20, name: "Atlanta" },
      { markerOffset: -10, name: "Seattle" },
      { markerOffset: -10, name: "San Diego" },
      { markerOffset: 20, name: "Dallas" },
      { markerOffset: 20, name: "StarLight" },
      { markerOffset: 18, name: "Washington" },
    ],
  },
  edge_nodes:{
    "phase1": [
      { markerOffset: 15, name: "LBNL" },
      { markerOffset: 15, name: "RENCI" },
      { markerOffset: 12, name: "UKY" },
      { markerOffset: 15, name: "FIU&AMPATH" },
      { markerOffset: 10, name: "NCSA" },
      { markerOffset: -8, name: "UMich" },
      { markerOffset: 12, name: "MAX" },
      { markerOffset: 12, name: "Utah" },
      { markerOffset: 12, name: "TACC" },
      { markerOffset: 12, name: "UMass" },
      { markerOffset: 12, name: "GaTech" },
      { markerOffset: 12, name: "Clemson" },
      { markerOffset: 15, name: "UCSD" },
      { markerOffset: 12, name: "GPN" },
    ],
    "phase2": [
      { markerOffset: 15, name: "FIU&AMPATH" },
      { markerOffset: 12, name: "LBNL" },
      { markerOffset: 12, name: "SRI" },
      { markerOffset: 12, name: "UCSD" },
      { markerOffset: 12, name: "Utah" },
      { markerOffset: -10, name: "GPN" },
      { markerOffset: 12, name: "TACC" },
      { markerOffset: 12, name: "LEARN" },
      { markerOffset: 10, name: "IU" },
      { markerOffset: 10, name: "UKY" },
      { markerOffset: -8, name: "UMich" },
      { markerOffset: 10, name: "NCSA" },
      { markerOffset: -5, name: "GaTech" },
      { markerOffset: 10, name: "Clemson" },
      { markerOffset: 10, name: "MAX" },
      { markerOffset: 10, name: "RENCI" },
      { markerOffset: 10, name: "PSC" },
      { markerOffset: 10, name: "Rutgers" },
      { markerOffset: -8, name: "Princeton" },
      { markerOffset: 10, name: "UMass" },
    ],
  },
  facilities:{
    "phase1": [
    { markerOffset: -25, name:"CLOUDLAB&POWDER" },
    { markerOffset: -25, name: "TACC&CHAMELEON" },
    { markerOffset: -28, name:"MGHPCC" },
    { markerOffset: -25, name:"LBNL" },
    { markerOffset: -23, name:"SDSC" },
    { markerOffset: -25, name: "NCSA" },
    { markerOffset: -23, name:"CHAMELEON" },
    { markerOffset: -25, name:"CLOUDLAB" },
    ],
    "phase2": [
      { markerOffset: -25, name: "TACC&CHAMELEON" },
      { markerOffset: -25, name: "NCSA" },
      { markerOffset: -28, name:"MGHPCC" },
      { markerOffset: -25, name:"LBNL" },
      { markerOffset: -23, name:"PSC" },
      { markerOffset: -25, name:"CLOUDLAB&POWDER" },
      { markerOffset: -23, name:"SDSC" },
      { markerOffset: -23, name:"CHAMELEON" },
      { markerOffset: -23, name:"COSMOS" },
      { markerOffset: -25, name:"CLOUDLAB" },
    ],
  },
  lines: {
    "phase1": [
      // core - core
      { from: "StarLight", to: "Washington" },
      { from: "StarLight", to: "Dallas" },
      { from: "StarLight", to: "Salt Lake City" },
      // core - edge
      { from: "RENCI", to: "Washington" },
      { from: "MAX", to: "Washington" },
      { from: "StarLight", to: "UMich" },
      { from: "StarLight", to: "NCSA" },
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
      { from: "Kansas City", to: "StarLight" },
      { from: "Kansas City", to: "Dallas" },
      { from: "StarLight", to: "Atlanta" },
      { from: "StarLight", to: "Washington" },
      { from: "StarLight", to: "New York" },
      { from: "Washington", to: "New York"},
      { from: "Washington", to: "Atlanta"},
      { from: "FIU&AMPATH",to: "Atlanta"},
      // core - edge
      { from: "LBNL",to: "San Diego"},
      { from: "SRI",to: "San Diego"},
      { from: "UCSD",to: "San Diego"},
      { from: "Utah", to: "Salt Lake City" },
      { from: "Kansas City", to: "GPN" },
      { from: "TACC", to: "Dallas" },
      { from: "LEARN", to: "Dallas" },
      { from: "StarLight", to: "IU" },
      { from: "StarLight", to: "UKY" },
      { from: "StarLight", to: "UMich" },
      { from: "StarLight", to: "NCSA" },
      { from: "Clemson", to: "Atlanta"},
      { from: "GaTech", to: "Atlanta"},
      { from: "PSC", to: "Washington" },
      { from: "RENCI", to: "Washington" },
      { from: "MAX", to: "Washington" },
      { from: "Rutgers", to: "New York" },
      { from: "Princeton", to: "New York" },
      { from: "UMass", to: "New York" },
    ],
  },
  dotted_lines: [
    { from: "Salt Lake City", to: "UCSD" },
    { from: "Salt Lake City", to: "GPN" },
    { from: "Dallas", to: "UCSD" },
    { from: "LBNL", to: "UCSD" },
    { from: "UKY", to: "StarLight" },
    { from: "Dallas", to: "FIU&AMPATH" },
    { from: "RENCI", to: "Washington" },
    { from: "FIU&AMPATH", to: "Washington" },
    { from: "Clemson", to: "Washington" },
    { from: "GaTech", to: "Washington" },
    { from: "UMass", to: "Washington" },
  ],
  lines_super:{
    "phase1": [],
    "phase2": [
      { from: "StarLight", to:  "Washington" },
      { from: "Dallas", to: "StarLight" },
      { from: "San Diego", to: "Dallas" },
    ],
  },
  international_nodes: [
    { markerOffset: -8, name: "University of Tokyo" },
    { markerOffset: 12, name: "University of Bristol" },
    { markerOffset: -8, name: "University of Amsterdam" },
    { markerOffset: 12, name: "CERN" },
    {  markerOffset: 12, name: "RNP&ANSP&RedCLARA"},
  ],
  usa_core_nodes: [
    { markerOffset: -8, name: "New York" },
    { markerOffset: -8, name: "Seattle" },
    { markerOffset: -8, name: "Salt Lake City" },
    { markerOffset: -8, name: "Kansas City" },
    { markerOffset: 12, name: "Atlanta" },
    { markerOffset: 12, name: "San Diego" },
    { markerOffset: 12, name: "Dallas" },
    { markerOffset: -8, name: "StarLight" },
    { markerOffset: 12, name: "Washington" },
    { markerOffset: 12, name: "FIU" },
  ],
  international_lines: [
    { from: "Seattle", to: "University of Tokyo" },
    { from: "New York", to: "University of Bristol" },
    { from: "New York", to: "University of Amsterdam" },
    { from: "New York", to: "CERN" },
    { from: "RNP&ANSP&RedCLARA", to: "FIU" },
  ],
  usa_lines: [
    { from: "Seattle", to: "Salt Lake City" },
    { from: "Seattle", to: "San Diego" },
    { from: "San Diego", to: "Salt Lake City" },
    { from: "San Diego", to: "Dallas" },
    { from: "Salt Lake City" , to: "Kansas City" },
    { from: "Dallas", to: "Atlanta" },
    { from: "Kansas City", to: "StarLight" },
    { from: "Kansas City", to: "Dallas" },
    { from: "StarLight", to: "Atlanta" },
    { from: "StarLight", to: "Washington" },
    { from: "StarLight", to: "New York" },
    { from: "Washington", to: "New York"},
    { from: "Washington", to: "Atlanta"},
    { from: "FIU", to: "Atlanta"},
  ],
  usa_lines_super: [
    { from: "StarLight", to:  "Washington" },
    { from: "Dallas", to: "StarLight" },
    { from: "San Diego", to: "Dallas" },
  ]
}
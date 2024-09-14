// import GoogleMapReact from 'google-map-react'
// import LocationMarker from './LocationMarker'

// const Map = ({ eventData, center, zoom}) => {
//   const markers = eventData.map(ev => {
//     if(ev.categories[0].id === 10) {
//       console.log(ev.geometries[2].coordinates[1])
//       console.log(ev.geometries[2].coordinates[0])
//       console.log("hi")
//       return <LocationMarker lat={ev.geometries[2].coordinates[1]} lng={ev.geometries[2].coordinates[0]}/>
//     } 
//     return null
//   })

//   return (
//     <div className='map'>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBQJTMagcRrmJNtEIie2dxKEORL2F1eKVY' }}
//           defaultCenter = {center}
//           defaultZoom = {zoom}
//         >

//           {markers}
//         </GoogleMapReact>
//     </div>
//   )
// }

// Map.defaultProps = {
//     center: {
//       lat: 43.651070,
//       lng: -79.347015
//     },
//     zoom: 6
// }

// export default Map



// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import LocationMarker from './LocationMarker';

// const Map = ({ eventData, center, zoom }) => {
//   // Flatten and map through the eventData to create markers for each geometry point
//   const markers = eventData.flatMap(ev => 
//     ev.categories[0].id === 10
//       ? ev.geometries.map((geometry, index) => (
//           <LocationMarker
//             key={`${ev.date}-${index}`} // Ensure unique keys for each marker
//             lat={geometry.coordinates[1]} // Latitude
//             lng={geometry.coordinates[0]} // Longitude
//           />
//         ))
        
//       : []
//   );
//   return (
//     <div className='map'>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyBQJTMagcRrmJNtEIie2dxKEORL2F1eKVY' }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         {markers}
//       </GoogleMapReact>
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 43.651070,
//     lng: -79.347015
//   },
//   zoom: 6
// };

// export default Map;


import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
  // Flatten and map through the eventData to create markers for each geometry point
  const markers = eventData.flatMap(ev => 
    ev.categories[0].id === 10
      ? ev.geometries.map((geometry, index) => {
          const lat = geometry.coordinates[1]; // Latitude
          const lng = geometry.coordinates[0]; // Longitude
          
          // Log the coordinates for debugging purposes
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          
          return (
            <LocationMarker
              key={`${ev.date}-${index}`} // Ensure unique keys for each marker
              lat={lat}
              lng={lng}
            />
          );
        })
      : []
  );

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBQJTMagcRrmJNtEIie2dxKEORL2F1eKVY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 43.651070,
    lng: -79.347015
  },
  zoom: 6
};

export default Map;

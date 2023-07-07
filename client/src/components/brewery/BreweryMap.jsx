import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function BreweryMap({ lat, lng, name }) {
  lat = parseFloat(lat);
  lng = parseFloat(lng);

  const position = [lat, lng];
  const zoom = 15;
  const username = "drregg6";
  const style_id = "cjxrwigoz6qmy1cpo92v6d513";
  const tilesize = "512";
  const access_token = process.env.REACT_APP_MAPBOX;
  const endpoint=`https://api.mapbox.com/styles/v1/${username}/${style_id}/tiles/${tilesize}/{z}/{x}/{y}?access_token=${access_token}`;

  console.log(`Endpoint: ${endpoint}`);
  console.log(`position: ${lat}, ${lng}`);
  console.log(`zoom: ${zoom}`)

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={endpoint}
      />
      <Marker position={position}>
        <Popup>
          {name}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default BreweryMap;
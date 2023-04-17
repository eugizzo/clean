import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
   
    <MapContainer center={[-1.9343, 30.1179]} zoom={12} scrollWheelZoom={false} style={{  height: '500px', borderRadius: '10px'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
    </MapContainer>
   
  );
};

export default Map;
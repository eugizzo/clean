import { MapContainer, TileLayer , Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTrash, FaRegTrashAlt } from "react-icons/fa";
import icon from './image/Trash.png';
import icon2 from './image/Trash2.png';
import L from 'leaflet';
const customIcon = L.icon({
  iconUrl: icon,
  iconSize: [40, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const customIcon2 = L.icon({
  iconUrl: icon2,
  iconSize: [40, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  
  return (
    <div className=''>

      <MapContainer className='z-30  h-screen' center={[-1.890051, 30.088856]} zoom={13} scrollWheelZoom={false} style={{ borderRadius: '10px' }}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <div className='leaflet-control leaflet-right leaflet-top  m-[25px] bg-white opacity-70 p-4'>
          <div className='flex '>
            <div className='bg-[#7a7d7a] rounded-full w-[28px] h-[28px]  '>
              <FaTrash className='text-white text-xl pt-[5px] pl-[7px] ' />
            </div>
            <div>
              <h3 className='text-[15px] p-1'>Low Waste Level</h3>
            </div>
          </div>

          <div className='flex  pt-3'>
          <div className='bg-[#790279] rounded-full w-[28px] h-[28px]  '>
            <FaRegTrashAlt className='text-white text-xl pt-[5px] pl-[7px] ' />
          </div>
          <div>
            <h3 className='text-[15px] p-1'>Mid Low Level</h3>
          </div>
        </div>


        <div className='flex  pt-3'>
        <div className='bg-black rounded-full w-[28px] h-[28px]  '>
          <FaRegTrashAlt className=' text-white text-xl pt-[5px] pl-[7px] ' />
        </div>
        <div>
          <h3 className='text-[15px] p-1'>Mid High Level</h3>
        </div>
      </div>
        

      <div className='flex  pt-3'>
      <div className='bg-[#fd0d0d] rounded-full w-[28px] h-[28px]  '>
        <FaTrash className='text-white text-xl pt-[5px] pl-[7px] ' />
      </div>
      <div>
        <h3 className='text-[15px] p-1'>Almost Full Level</h3>
      </div>
    </div>

    <div className='flex  pt-3'>
    <div className='bg-[#0530c6] rounded-full w-[28px] h-[28px]  '>
      <FaRegTrashAlt className='text-white text-xl pt-[5px] pl-[7px] ' />
    </div>
    <div>
      <h3 className='text-[15px] p-1'>Just Collected</h3>
    </div>
  </div> 

  <div className='flex  pt-3'>
  <div className='border-3 border-black  rounded-[7px] w-[28px] h-[28px]  '>
  <FaRegTrashAlt className='text-white text-xl pt-[5px] pl-[7px] ' />
  </div>
  <div>
    <h3 className='text-[15px] p-1'>N Grouped Bins</h3>
  </div>
</div> 
        

         
        </div>

        <Marker position={[-1.948060, 30.126742]} icon={customIcon}>
        <Popup>
          A custom marker with a red background.
        </Popup>
      </Marker>
      <Marker position={[-1.972855, 30.181438]} icon={customIcon}>
      <Popup>
        A custom marker with a red background.
      </Popup>
    </Marker>
    <Marker position={[-1.939927, 30.047957]} icon={customIcon2} className="custom-marker">
    <Popup>
      A custom marker with a red background.
    </Popup>
  </Marker>
  <Marker position={[-1.972749, 30.094112]} icon={customIcon2} className="custom-marker">
  <Popup>
    Zinia.
  </Popup>
</Marker>
<Marker position={[-1.964116, 30.022416]} icon={customIcon2} className="custom-marker">
<Popup>
  karama
</Popup>
</Marker>
      </MapContainer>

    </div>
  );
};

export default Map;
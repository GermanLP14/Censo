import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import markerIcon from "../assets/ubi.png"
import 'leaflet/dist/leaflet.css';

function Mapa({ markersData }) {
    const center = [-32.81667, -56.51667];
    const zoom = 7;
    const size = { height: '600px', width: '800px' }
    const urlTileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    return (
        <div >
            <div >
                <MapContainer center={center} zoom={zoom} style={size} >
                    <TileLayer url={urlTileLayer} />
                    {markersData?.map(marker => {
                        const posMarker = [marker.lat, marker.lng];
                        const keyMarker = `${marker.lat}-${marker.lng}`;
                        return (
                            <Marker key={keyMarker} position={posMarker} icon={customMarkerIcon}>
                                <Popup>
                                    <h3>{marker.titulo}</h3>
                                    <h6> {marker.contenido}</h6>
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </div>
    )
}

export default Mapa
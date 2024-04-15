import 'leaflet/dist/leaflet.css';
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps{
    place: Place | null;
}

export default function Map({ place }: MapProps){
    const mapRef = useRef<LeafletMap | null>(null);
    
    useEffect(()=>{
        if(mapRef.current && place){
            console.log(mapRef)
            mapRef.current.flyTo([place.latitude, place.longitude],14);
        }
    }, [place])

    //flyTo:Sets the view of the map (geographical center and zoom) performing a smooth pan-zoom animation.

    return (
        <MapContainer
            ref={mapRef}
            center={[47.38, 8.527]}
            zoom={12}
            scrollWheelZoom
            className="h-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {place && <Marker position={[place.latitude, place.longitude]}/>}
        </MapContainer>
    )
}
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationMap = ({ lat, lng, locationName }) => {
    const position = [lat, lng];

    return (
        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
            <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
                <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} attributon="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"/>
                <Marker position={position}>
                    <Popup>{locationName}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap
import React, { useEffect } from 'react';

const LocationMap = ({ lat, lng, locationId }) => {
    useEffect(() => {
        if (window.MQ) {
            console.log("Loaded");
            const map = new window.MQ.Map('map', {
                center: [lat, lng],
                zoom: 14,
            });

            const marker = new window.MQ.Marker({
                lat: lat,
                lng: lng,
            });

            map.addMarker(marker);
        } else {
            console.log("Not loaded");
        }
    }, [lat, lng, locationId]);

    return (
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
    );
};

export default LocationMap
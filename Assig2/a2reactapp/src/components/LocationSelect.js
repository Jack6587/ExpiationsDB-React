import React, { useState, useEffect } from 'react';

const LocationSelect = ({ suburb, onLocationChange }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (!suburb) return;

        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(err => console.log(err));
    }, [suburb])
}
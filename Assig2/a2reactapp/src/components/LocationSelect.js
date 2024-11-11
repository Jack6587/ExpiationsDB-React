import React, { useState, useEffect } from 'react';

const LocationSelect = ({ suburb, onLocationChange }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        console.log("Suburb selected: ", suburb);
        if (!suburb) return;
        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => response.json())
            .then(data => {
                setLocations(data);
                console.log("Locations: ", data);
            })
            .catch(err => console.log(err));
    }, [suburb]);

    const handleLocationChange = (e) => {
        console.log("Selected location ID: ", e.target.value);
        onLocationChange(e.target.value);
    }

    return (
        <select className="form-control" onChange={handleLocationChange}>
            <option value="">Select a specific location</option>
            {locations.map((location) => (
                <option key={location.locationId} value={location.locationId}>
                    {location.roadName}
                </option>
            ))}
        </select>
    )
}

export default LocationSelect;
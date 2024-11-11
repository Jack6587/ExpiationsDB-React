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

    return (
        <select className="form-control" onChange={(e) => onLocationChange(e.target.value)}>
            <option value="">Select a specific location</option>
            {locations.map((location) => (
                <option key={location.locationID} value={location.locationID}>
                    {location.roadName}
                </option>
            ))}
        </select>
    )
}

export default LocationSelect;
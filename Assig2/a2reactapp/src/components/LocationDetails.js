import React, { useState, useEffect } from 'react';

const LocationDetails = ({ locationId, cameraTypeCode }) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [locationId, cameraTypeCode]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="location-details">
            <h3>Location {locationId} Details</h3>
            <div className="stats">
                <p>Total Offences: {data.totalOffencesCount}</p>
            </div>
        </div>
    );
};

export default LocationDetails;
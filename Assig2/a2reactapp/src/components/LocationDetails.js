import React, { useState, useEffect } from 'react';
import ExpiationGraph from './ExpiationGraph';
import LocationMap from './LocationMap';

const LocationDetails = ({ locationId, locationName, offenceCode, cameraTypeCode, lat, lng }) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}&offenceCodes=${offenceCode}`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [locationId, offenceCode, cameraTypeCode]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="location-details">
            <h3>Location {locationName}, ID {locationId}</h3>
            <div className="stats">
                <p><strong>Total Offences:</strong> {data.totalOffencesCount}</p>
                <p><strong>Total Demerits:</strong> {data.totalDemerits}</p>
            </div>

            <LocationMap lat={lat} lng={lng} locationName={locationName} />
            <ExpiationGraph expiationDaysOfWeek={data.expiationDaysOfWeek} />
        </div>
    );
};

export default LocationDetails;
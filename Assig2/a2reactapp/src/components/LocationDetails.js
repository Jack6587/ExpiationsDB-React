import React, { useState, useEffect } from 'react';
import ExpiationGraph from './ExpiationGraph';
import LocationMap from './LocationMap';

const LocationDetails = ({ locationId, locationName, offenceCode, cameraTypeCode, lat, lng, startTime, endTime }) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}&startTime=${1704067200}&endTime=${1711843199}&offenceCodes=${offenceCode}`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [locationId, offenceCode, cameraTypeCode]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="location-details">
            <h3 className="location-header"><strong>Location:</strong> {locationName} <strong>ID:</strong> {locationId}</h3>
            <div className="stats">
                <p><strong>Total Offences:</strong> {data.totalOffencesCount}</p>
                <p><strong>Total Demerits:</strong> {data.totalDemerits}</p>
                <p><strong>Average Demerits per Day:</strong> {data.avgDemeritsPerDay.toFixed(2)}</p>
            </div>

            <LocationMap lat={lat} lng={lng} locationName={locationName} />
            <ExpiationGraph expiationDaysOfWeek={data.expiationDaysOfWeek} />
        </div>
    );
};

export default LocationDetails;
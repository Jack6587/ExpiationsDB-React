import React, { useState, useEffect } from 'react';

const LocationDetails = ({ locationId, cameraTypeCode }) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http:localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}`)
    })
}

return (
    <div className="location-details">
        <h2>Report for Locations: Location 1 and Location 2</h2>
        <Link className="nav-link" to="/Dashboard">Return to Dashboard</Link>
        <p><strong>Selected MPDC Sites</strong>:</p>
        <ul>
            <li>MPDC Site 1: Location A</li>
            <li>MPDC Site 2: Location B</li>
        </ul>
        <p><strong>Filters used</strong>:</p>
        <ul>
            <li>Autocomplete Textbox for Offence Code Filter</li>
            <li>Dropdown Box for Suburb Select</li>
            <li>Dropdown Box for Specific Location Select</li>
            <li>Date Range Select</li>
        </ul>
        <br />
        <div>
            {locationData.map((location) => {
                const { locationId, data } = location;

                return (
                    <div key={locationId} style={{ marginBottom: '40px' }}>
                        <div>
                            <p>Total Offences: {data.totalOffences}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
)
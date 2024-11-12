import React, { useState, useEffect } from 'react';

const LocationResults = ({ suburb }) => {
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
        <div>
            <h3>Locations in {suburb}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Location ID</th>
                        <th>Road Name</th>
                        <th>Camera Type</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => (
                        <tr key={location.locationId}>
                            <td>{location.locationId}</td>
                            <td>{location.roadName} {location.roadType}</td>
                            <td>{location.cameraTypeCode}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>

    )
}

export default LocationResults;
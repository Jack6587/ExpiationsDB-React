import React, { useState, useEffect } from 'react';

const LocationResults = ({ suburb, cameraType, searchQuery, searchTrigger, startTime, endTime }) => {
    const [locations, setLocations] = useState([]);
    const [locationStats, setlocationStats] = useState({});

    useEffect(() => {
        console.log("Suburb selected: ", suburb);
        if (!searchTrigger) return;
        if (!suburb || !cameraType) return;

        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => response.json())
            .then(data => {
                const locationsData = data.filter(location => location.cameraTypeCode === cameraType);
                setLocations(locationsData);

                data.forEach(location => {
                    expiationsForLocations(location.locationId);
                });
            })
            .catch(err => console.log(err));
    }, [searchTrigger, suburb, cameraType, searchQuery]);

    useEffect(() => {
        if (locations.length === 0) return;

        locations.forEach(location => {
            expiationsForLocations(location.locationId);
        });
    }, [startTime, endTime, locations]) // fetches if the start or end time changes

    const expiationsForLocations = (locationId) => {
        let url = `http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraType}`;

        if (startTime && endTime) {
            url += `&startTime=${startTime}&endTime=${endTime}`;
        }

        if (searchQuery) {
            url += `&offenceCodes=${searchQuery}`;
        }

        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setlocationStats(prev => ({
                    ...prev,
                    [locationId]: data
                }));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {searchTrigger && (
                <h4>Locations in {suburb} for Camera Type {cameraType}</h4>
            )}

            {searchTrigger ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Location ID</th>
                            <th>Road Name</th>
                            <th>Camera Type</th>
                            <th>Expiation Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.length === 0 ? (
                            <tr>
                                <td>No locations found for your search.</td>
                            </tr>
                        ) : ( 
                            locations.map(location => {
                                const stats = locationStats[location.locationId] || 0;
                                return (
                                    <tr key={location.locationId}>
                                        <td>{location.locationId}</td>
                                        <td>{location.roadName} {location.roadType}</td>
                                        <td>{location.cameraTypeCode}</td>
                                        <td>{stats.totalOffencesCount || 0}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            ) : (
                <p>Search to view data!</p>
            ) }

        </div>

    )
}

export default LocationResults;
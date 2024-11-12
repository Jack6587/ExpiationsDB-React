import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
    const [locationData, setLocationData] = useState([]);
    const locationIds = [23, 1709];
    const tempLocationData = useRef([]);

    useEffect(() => {
        const fetchLocationData = (index) => {
            if (index >= locationIds.length) {
                setLocationData()
            }
        }

            const locationId = locationIds[index];
            fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=M`)
                .then(response => response.json())
                .then(data => {
                    setLocationData((prevData) => [
                        ...prevData,
                        { locationId, data }
                    ]);

                    fetchLocationData(index + 1);
                })
                .catch(err => console.log(err));
        };

        fetchLocationData(0);

    }, []);

    return (
        <div className="dashboard">
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
        </div>
    )
}

export default Report;
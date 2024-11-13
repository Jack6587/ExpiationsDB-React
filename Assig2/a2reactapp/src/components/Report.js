import React, { useState, useEffect, useRef } from 'react';
import LocationDetails from './LocationDetails';
import { Link } from 'react-router-dom';

const Report = () => {
    const locations = [
        { locationId: 23, cameraTypeCode: 'M' },
        { locationId: 65, cameraTypeCode: 'M' },
    ];

    return (
        <div className="report">
            <h2>MPDC Site Report</h2>

            {locations.map((location) => (
                <LocationDetails key={location.locationId} locationId={location.locationId} cameraTypeCode={location.cameraTypeCode} lat={location.lat} long={location.long} />
            )) }
        </div>
    )

}

export default Report;
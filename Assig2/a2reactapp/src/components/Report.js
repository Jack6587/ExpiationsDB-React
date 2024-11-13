import React, { useState, useEffect, useRef } from 'react';
import LocationDetails from './LocationDetails';
import { Link } from 'react-router-dom';

const Report = () => {
    const locations = [
        { locationId: 118, locationName: 'Grote Street/West Terrace', cameraTypeCode: 'I/section', offenceCode: 'A001', lat: -34.929246, lng: 138.587860 },
        { locationId: 65, locationName: 'West Terrace/Hindley Street', cameraTypeCode: 'I/section', offenceCode: 'A001', lat: -34.923566, lng: 138.587405 },
    ];

    return (
        <div className="report-container">
            <div className="report-content">
                <h2>MPDC Site Report</h2>
                <p>The following areas have been chosen for MPDC installation for numerous reasons. First is their overall high volume of expiations, which demonstrates the large occurrence of offences in these areas. Next is the number of expiations that occur for each day of the week. Note that the expiation counts vary for both areas, where Location 65 (Anzac Highway) sees more expiations occur on Tuesdays, Wednesdays and Sundays, whereas Location 118 (Grote Street) sees more expiations on weekdays and Saturdays.</p>
                <p>The search filters used to establish these results were Suburb, Camera Type, and Offence Code. The results displayed here only reflect expiations that occurred under Offence Code A001, which represents speeding between 1-9km over the speed limit. This best demonstrates cases where mobile phones may have been in use (cases of less "extreme" expiations).</p>
                <h5>Key Areas to Install MPDC Sites:</h5>
                {locations.map((location) => (
                    <LocationDetails key={location.locationId} offenceCode={location.offenceCode} locationName={location.locationName} locationId={location.locationId} cameraTypeCode={location.cameraTypeCode} lat={location.lat} lng={location.lng} />
                ))}
            </div>
        </div>
    )

}

export default Report;
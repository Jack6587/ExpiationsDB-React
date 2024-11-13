import React, { useState, useEffect, useRef } from 'react';
import LocationDetails from './LocationDetails';
import { Link } from 'react-router-dom';

const Report = () => {
    const locations = [
        { locationId: 118, locationName: 'Grote Street/West Terrace', cameraTypeCode: 'I/section', offenceCode: 'A001', lat: -34.929246, lng: 138.587860, startTime: 1704067200, endTime: 1711843199 },
        { locationId: 51, locationName: 'Greenhill Road/Hutt Road', cameraTypeCode: 'I/section', offenceCode: 'A001', lat: -34.940523, lng: 138.612753, startTime: 1704067200, endTime: 1711843199 },
    ];

    return (
        <div className="report-container">
            <div className="report-content">
                <h2>MPDC Site Report</h2>
                <h5>Key Areas to Install MPDC Sites:</h5>
                {locations.map((location) => (
                    <LocationDetails
                        key={location.locationId}
                        offenceCode={location.offenceCode}
                        locationName={location.locationName}
                        locationId={location.locationId}
                        cameraTypeCode={location.cameraTypeCode}
                        lat={location.lat}
                        lng={location.lng}
                        startTime={location.startTime}
                        endTime={location.endTime}
                    />

                ))}
                <p>The above areas have been chosen for MPDC installation for numerous reasons. First is their overall high volume of expiations, which demonstrates the large occurrence of offences in these areas. Next is the number of expiations that occur for each day of the week. This data represents a strong spread of data for each day, with both yielding a high turnout even with the specific search filters applied.</p>
                <p>The search filters used to establish these results were Suburb, Camera Type, Offence Code/Description and Date Range. The results displayed here only reflect expiations that occurred under Offence Code A001, which represents speeding between 1-9km over the speed limit. These expiations all occured inn the time frame of January 1st to March 30th 2024. This best demonstrates cases where mobile phones may have been in use (cases of less "extreme" expiations, where the driver is committing a small expiation, rather than a large one).</p>
                <p>To capture the suburb search, a dropdown was used that fetches data from the API endpoint Get_ListCameraSuburbs.</p>
                <p>Using the selected suburb, the next dropdown is for camera select, which uses the API endpoint Get_ListCamerasInSuburb. Each suburb has its own specific camera types set up, so users can select from this to best represent/find data.</p>
                <p>Then, users can enter a date range to better refine their search (but this is not necessary to yield results).</p>
                <p>Finally, users can enter an offence description which aligns with an offence code to refine searches to a specific type of offence. This search is also not necessary to yield results. To get autocomplete options, the API endpoint Get_SearchOffencesByDescription was used to fetch all options that matched/contained the search text.</p>
                <p>All of these filters are combined to return API endpoints Get_ExpiationsForLocationId and Get_ExpiationStatsForLocationId, which are used to get the list of locations and the number of expiations that occurred respectively.</p>
            </div>
        </div>
    )

}

export default Report;
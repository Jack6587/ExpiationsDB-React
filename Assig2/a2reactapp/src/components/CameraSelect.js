import React, { useState, useEffect } from 'react';

const CameraSelect = ({ suburb, onCameraTypeChange }) => {
    const [cameraTypes, setCameraTypes] = useState([]);

    useEffect(() => {
        if (!suburb) return;

        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => response.json())
            .then(data => {
                const uniqueCameraTypeCodes = Array.from(new Set(data.map(item => item.cameraTypeCode)));
                setCameraTypes(uniqueCameraTypeCodes)
            })
            .catch(err => console.log(err));
    }, [suburb]);


    const handleCameraTypeChange = (e) => {
        console.log("Selected location ID: ", e.target.value);
        onCameraTypeChange(e.target.value);
    }

    return (
        <select className="form-control" onChange={handleCameraTypeChange}>
            <option value="">Select a Camera Type</option>
            {cameraTypes.map((cameraType, index) => (
                <option key={index} value={cameraType}>
                    {cameraType}
                </option>
            ))}
        </select>
    )
}

export default CameraSelect;
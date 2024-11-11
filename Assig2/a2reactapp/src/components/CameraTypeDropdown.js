import React, { useState, useEffect } from 'react';

function CameraTypeDropdown({ suburb, selectedCameraType, onCameraChange }) {
    const [cameraType, setCameraTypes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then((response) => response.json())
            .then((data) => {
                setCameraTypes(data);
            })
            .catch((err) => console.log(err))
    })
}


export default CameraTypeDropdown;
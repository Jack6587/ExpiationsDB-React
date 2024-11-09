import React, { useState, useEffect } from 'react'

function SuburbDropdown({ selectedSuburb, onSuburbChange }) {
    const [suburbs, setSuburbs] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5147/api/Get_ListCameraSuburbs`)
            .then(response => response.json())
            .then(data => setSuburbs(data))
            .catch(err => {
                console.log(err);
            });
    }, []);

    function onSelect(event) {
        onSuburbChange(event.target.value);
    }

    return (
        <select className="form-control" value={selectedSuburb} onChange={onSelect}>
            <option value="">Select a suburb</option>
            {suburbs.map((suburb) => (
                <option key={suburb} value={suburb}>
                    {suburb}
                </option>
            )) }
        </select>
    )
}

export default SuburbDropdown;
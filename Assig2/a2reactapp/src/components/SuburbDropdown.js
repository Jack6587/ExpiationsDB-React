import React, { useState } from 'react'

function SuburbDropdown() {
    const [suburbs, setSuburbs] = useState([]);

    React.useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5147/api/Get_ListCameraSuburbs`)
            .then(response => response.json())
            .then(data => setSuburbs(data))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <select className="form-control">
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
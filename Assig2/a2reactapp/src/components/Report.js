import React from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
    return (
        <div className="dashboard">
            <h2>Report</h2>
            <p>Details...</p>
            <Link className="nav-link" to="/Dashboard">Return to Dashboard</Link>
        </div>
    )
}

export default Report;
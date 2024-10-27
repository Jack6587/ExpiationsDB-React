import React from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Search below...</p>
            <SuburbDropdown />
            <div>
                <Link className="nav-link" to="/Report">Report</Link>
            </div>
            
        </div>
    )
}

export default Dashboard;
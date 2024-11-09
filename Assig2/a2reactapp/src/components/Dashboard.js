import React from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import './style/Navbar.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown />
            <DescriptionSearch />
            <div>
                <Link className="nav-link" to="/Report">Generate Report</Link>
            </div>
            
        </div>
    )
}

export default Dashboard;
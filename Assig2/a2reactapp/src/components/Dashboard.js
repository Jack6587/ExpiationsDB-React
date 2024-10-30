import React from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import './style/Navbar.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/Report">Report</Link>
            </nav>
            <h2>Dashboard</h2>
            <p>Search below...</p>
            <SuburbDropdown />
            <div>
                <Link className="nav-link" to="/Report">Generate Report</Link>
            </div>
            
        </div>
    )
}

export default Dashboard;
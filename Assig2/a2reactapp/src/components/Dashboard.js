import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import './style/Navbar.css';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function handleSuburbChange(suburb) {
        setSelectedSuburb(suburb);
    }

    function handleSearchChange(query) {
        setSearchQuery(query);
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
            <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} />

            <div>
                <Link className="nav-link" to="/Report">Generate Report</Link>
            </div>

        </div>
    );
}

export default Dashboard;
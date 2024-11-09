import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import CardList from './CardList';
import './style/Navbar.css';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [offenceCodesOnly, setOffenceCodesOnly] = useState(false);

    function handleSuburbChange(suburb) {
        setSelectedSuburb(suburb);
    }

    function handleSearchChange(query) {
        setSearchQuery(query);
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown searchQuery={searchQuery} onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
            <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} />

            <CardList searchQuery={searchQuery} offenceCodesOnly={offenceCodesOnly} selectedSuburb={selectedSuburb} />

        </div>
    );
}

export default Dashboard;
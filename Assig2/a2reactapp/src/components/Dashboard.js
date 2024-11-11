import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import CardList from './CardList';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [cameraType, setCameraType] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [offenceCodesOnly, setOffenceCodesOnly] = useState(false);
    const [searchTrigger, setSearchTrigger] = useState(false);

    function handleSuburbChange(suburb) {
        setSelectedSuburb(suburb);
    }

    function handleSearchChange(query) {
        setSearchQuery(query);
    }

    function handleSearchSubmit(query) {
        setSearchTrigger(true);
        setSearchQuery(query);
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown searchQuery={searchQuery} onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
            <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit} offenceCodesOnly={offenceCodesOnly} />

            <CardList searchQuery={searchQuery} offenceCodesOnly={offenceCodesOnly} selectedSuburb={selectedSuburb} searchTrigger={searchTrigger} />

        </div>
    );
}

export default Dashboard;
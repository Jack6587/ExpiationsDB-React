import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import LocationSelect from './LocationSelect';
import CardList from './CardList';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [selectedLocationId, setSelectedLocationId] = useState('');
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
            <LocationSelect suburb={selectedSuburb} onLocationChange={setSelectedLocationId} onSearchChange={handleSearchChange} searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit} />
            <CardList searchQuery={searchQuery} selectedLocationId={selectedLocationId} searchTrigger={searchTrigger} />

        </div>
    );
}

export default Dashboard;
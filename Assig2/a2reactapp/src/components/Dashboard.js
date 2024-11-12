import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import CameraSelect from './CameraSelect';
import LocationResults from './LocationResults';
import CardList from './CardList';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [selectedCameraType, setSelectedCameraType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [offenceCodesOnly, setOffenceCodesOnly] = useState(false);
    const [searchTrigger, setSearchTrigger] = useState(false);

    function handleSuburbChange(suburb) {
        setSelectedSuburb(suburb);
    }

    function handleSearchChange(query) {
        setSearchQuery(query);
    }

    //function handleLocationChange(locationId) {
    //    console.log("Location selected in Dashboard: ", locationId);
    //    setSelectedLocationId(locationId);
    //}

    function handleSearchSubmit(query) {
        setSearchTrigger(true);
        setSearchQuery(query);
    }

    function handleCameraTypeChange(cameraType) {
        setSelectedCameraType(cameraType);
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown searchQuery={searchQuery} onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
            <CameraSelect suburb={selectedSuburb} onCameraTypeChange={handleCameraTypeChange} />
            <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit} offenceCodesOnly={offenceCodesOnly} />
            <LocationResults suburb={selectedSuburb} />
            {/*<CardList searchQuery={searchQuery} locationId={selectedLocationId} searchTrigger={searchTrigger} />*/}

        </div>
    );
}

export default Dashboard;
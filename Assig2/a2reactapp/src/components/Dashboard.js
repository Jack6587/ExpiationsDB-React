import React, { useState } from 'react';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import CameraSelect from './CameraSelect';
import LocationResults from './LocationResults';
import DateFilter from './DateFilter';

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [selectedCameraType, setSelectedCameraType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTrigger, setSearchTrigger] = useState(false);
    const [startTime, setStartTime] = useState(0); // default start time value
    const [endTime, setEndTime] = useState(2147483647);

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

    function handleCameraTypeChange(cameraType) {
        setSelectedCameraType(cameraType);
    }

    function handleDateChange(newStartTime, newEndTime) {
        setStartTime(newStartTime);
        setEndTime(newEndTime);
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SuburbDropdown searchQuery={searchQuery} onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
            <CameraSelect suburb={selectedSuburb} onCameraTypeChange={handleCameraTypeChange} />
            <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit} />
            <LocationResults suburb={selectedSuburb} cameraType={selectedCameraType} searchQuery={searchQuery} searchTrigger={searchTrigger} startTime={startTime} endTime={endTime} />

        </div>
    );
}

export default Dashboard;
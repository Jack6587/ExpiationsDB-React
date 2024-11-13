import React, { useState } from 'react';
import SuburbDropdown from './SuburbDropdown';
import DescriptionSearch from './DescriptionSearch';
import CameraSelect from './CameraSelect';
import LocationResults from './LocationResults';
import DateFilter from './DateFilter';
import './style/Dashboard.css'

const Dashboard = () => {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [selectedCameraType, setSelectedCameraType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTrigger, setSearchTrigger] = useState(false);
    const [startTime, setStartTime] = useState(0); // default start time value
    const [endTime, setEndTime] = useState(2147483647); // default end time value

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
            <div className="sidebar">
                <h2>Dashboard</h2>
                <SuburbDropdown searchQuery={searchQuery} onSuburbChange={handleSuburbChange} selectedSuburb={selectedSuburb} />
                <CameraSelect suburb={selectedSuburb} onCameraTypeChange={handleCameraTypeChange} />
                <DateFilter onDateChange={handleDateChange}></DateFilter>
                <DescriptionSearch onSearchChange={handleSearchChange} searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit} />
            </div>

            <div className="main-content">
                <LocationResults
                    suburb={selectedSuburb}
                    cameraType={selectedCameraType}
                    searchQuery={searchQuery}
                    searchTrigger={searchTrigger}
                    startTime={startTime}
                    endTime={endTime}
                />
            </div>
        </div>
    );
}

export default Dashboard;
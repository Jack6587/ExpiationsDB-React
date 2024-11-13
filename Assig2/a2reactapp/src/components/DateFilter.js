import React, { useState, useEffect } from 'react';

const toUnixTime = (date) => {
    return Math.floor(date.getTime() / 1000);
}

const DateFilter = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    useEffect(() => {
        if (startDate && endDate) {
            const startTime = toUnixTime(new Date(startDate));
            const endTime = toUnixTime(new Date(endDate));
            onDateChange(startTime, endTime);
        }
    }, [startDate, endDate, onDateChange])

    return (
        <div className="date-filter">
            <div className="row">
                <div className="col">
                    <label>Start Date:</label>
                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                </div>
                <div className="col">
                    <label>End Date:</label>
                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                </div>
            </div>
        </div>
    )
}

export default DateFilter;
import React, { useState } from 'react';

function DescriptionSearch() {
    const [input, setInput] = useState('');

    function onChange(event) {
        const value = event.target.value;
        setInput(value);
    }

    return (
        <input type="text" placeholder="Search by description" value={input} onChange={onChange} />
    );
}

export default DescriptionSearch;
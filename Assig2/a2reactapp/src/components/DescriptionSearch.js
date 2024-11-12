import { useEffect, useState } from 'react';
import './style/DescriptionSearch.css';
import Card from './Card';

function DescriptionSearch({ searchQuery, onSearchChange, onSearchSubmit }) {
    const [dataSuggestions, setDataSuggestions] = useState([]);

    const url = `http://localhost:5147/api/Get_SearchOffencesByDescription`;

    useEffect(() => {
        if (!searchQuery) return;
        
        fetch(`${url}?searchTerm=${searchQuery}&offenceCodesOnly=false`)
            .then(response => response.json())
            .then(data => setDataSuggestions(data))
            .catch(err => {
                console.log(err);
            });
    }, [searchQuery]);

    const handleOffenceSelect = (offenceCode) => {
        onSearchChange(offenceCode);
    };

    const handleInputChange = (e) => {
        onSearchChange(e.target.value);
    }

    return (
        <div className="descriptionSearch">
            <div className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="Search by description" value={searchQuery} onChange={handleInputChange} />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-outline-primary" onClick={() => onSearchSubmit(searchQuery)}>
                        Search
                    </button>
                </div>
            </div>

            {searchQuery && dataSuggestions.length > 0 && (
                <div className="col-12">
                    <ul className="list-group mt-2 dropdown-menu">
                        {dataSuggestions.map((offence) => (
                        <li
                                key={offence.offenceCode}
                                className="list-group-item list-group-item-action dropdown-item"
                                onClick={() => handleOffenceSelect(offence.offenceCode)}
                        >
                            {offence.description}
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DescriptionSearch;
import { useEffect, useState } from 'react';
import Card from './Card';

function DescriptionSearch({ searchQuery , offenceCodesOnly, onSearchChange, onSearchSubmit }) {
    const [dataSuggestions, setDataSuggestions] = useState([]);

    const url = `http://localhost:5147/api/Get_SearchOffencesByDescription`;

    useEffect(() => {
        if (!searchQuery) return;
        
        fetch(`${url}?searchTerm=${searchQuery}&offenceCodesOnly=${offenceCodesOnly}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            });
    }, [searchQuery, offenceCodesOnly]);

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
                    <button type="submit" className="btn btn-outline-primary">
                        Search
                    </button>
                </div>
            </div>

            {searchQuery && data.length > 0 && (
                <div className="col-12">
                    <ul className="list-group mt-2">
                        {data.map((offence) => (
                        <li
                                key={offence.offenceCode}
                                className="list-group-item list-group-item-action"
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
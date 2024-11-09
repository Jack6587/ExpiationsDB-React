import { useEffect, useState } from 'react';

function DescriptionSearch({ searchQuery , offenceCodesOnly }) {
    const [data, setData] = useState([]);

    const url = `http://localhost:5147/api/Get_SearchOffencesByDescription`;

    useEffect(() => {
        if (!searchQuery) return;

        console.log("useEffect")
        fetch(`${url}?searchTerm=${searchQuery}&offenceCodesOnly=${offenceCodesOnly}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            });
    }, [searchQuery, offenceCodesOnly]);

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value;
        setQuery(value);
    }

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        console.log("FormData: " + formData.get("searchText"))
        setQuery(formData.get("searchText"))
    }

    return (
        <div className="descriptionSearch">
            <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="Search by description" />
                </div>
                <div className="col-3 text-left">
                    <button type="submit" class="btn btn-outline-primary" value={searchQuery}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default DescriptionSearch;
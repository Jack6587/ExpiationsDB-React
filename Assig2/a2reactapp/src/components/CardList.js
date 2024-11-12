import { useEffect, useState } from 'react'
import Card from './Card'

const CardList = ({ searchQuery, locationId, searchTrigger }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        console.log("Location retrieved: ", locationId);
        console.log("Search query: ", searchQuery);
        if (locationId || searchQuery || searchTrigger) {
            const cameraTypeCode = 'M'; // hard-coded camera type. Subject to change, but most camera types fit into the 'M' category
            
            let url = `http://localhost:5147/api/Get_ExpiationsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}`;

            if (searchQuery) {
                url += `&offenceCodes=${searchQuery}`;
            }

            console.log("Fetching data from: ", url)

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched Card Data:", data);
                    setCardData(data)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [locationId, searchQuery, searchTrigger])

    return (
        <div className="row">
            {cardData.length === 0 ? (
                <div className="col-12">
                    <p>No results found for your search.</p>
                </div>
            ) : (
                cardData.map((obj) => (
                    <Card
                        key={obj.expId}
                        expId={obj.expId}
                        offenceCode={obj.offenceCode}
                        totalFeeAmt={obj.totalFeeAmt}
                        regState={obj.regState}
                        vehicleSpeed={obj.vehicleSpeed}
                        cameraTypeCode={obj.cameraTypeCode}
                        issueDate={obj.issueDate}
                    />
                )
                )
            ) }

        </div>
    )
}

export default CardList
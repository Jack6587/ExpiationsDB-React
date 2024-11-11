import { useEffect, useState } from 'react'
import Card from './Card'

const CardList = ({ searchQuery, locationId, searchTrigger }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        console.log("Location: ", locationId);
        if (locationId) {
            const cameraTypeCode = 'M'; // hard-coded camera type. Subject to change, but most camera types fit into the 'M' category
            fetch(`http://localhost:5147/api/Get_ExpiationsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraTypeCode}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Card Data:", data);
                    setCardData(data)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [locationId, searchQuery])

    return (
        <div className="row">
            {cardData.map((obj) => (
                <Card
                    key={obj.expId}
                    offenceCode={obj.offenceCode}
                    totalFeeAmt={obj.totalFeeAmt}
                    regState={obj.regState}
                    vehicleSpeed={obj.vehicleSpeed}
                    cameraTypeCode={obj.cameraTypeCode}
                    issueDate={obj.issueDate}
                />
            )
            )
            }
        </div>
    )
}

export default CardList
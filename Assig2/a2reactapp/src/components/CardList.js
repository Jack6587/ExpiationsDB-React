import { useEffect, useState } from 'react'
import Card from './Card'

const CardList = ({ searchQuery, offenceCodesOnly, selectedSuburb, searchTrigger }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        if (searchQuery || searchTrigger) {
            fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${searchQuery}&offenceCodesOnly=${offenceCodesOnly}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setCardData(data)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [searchQuery, offenceCodesOnly, selectedSuburb, searchTrigger])

    return (
        <div className="row">
            {cardData.map((obj) => (
                <Card
                    key={obj.offenceCode}
                    offenceCode={obj.offenceCode}
                    description={obj.description}
                    expiationFee={obj.expiationFee}
                    totalFee={obj.totalFee}
                    demeritPoints={obj.demeritPoints}
                    sectionID={obj.sectionID}
                    sectionCode={obj.sectionCode}
                />
            )
            )
            }
        </div>
    )
}

export default CardList
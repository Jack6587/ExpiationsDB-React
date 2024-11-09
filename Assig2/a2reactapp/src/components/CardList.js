import { useEffect, useState } from 'react'
import Card from './Card'

const CardList = ({ searchQuery, offenceCodesOnly }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${searchQuery}&offenceCodesOnly=${offenceCodesOnly}`)
            .then(response => response.json())
            .then(data => setCardData(data))
            .catch(err => {
                console.log(err);
            });
    }, [searchQuery, offenceCodesOnly])

    return (
        <div className="row">
            {cardData.map((obj) => (
                <Card
                    offenceCode={obj.offenceCode}
                    description={obj.description}
                    expiationFee={obj.expiationFee}
                    adultLevy={obj.adultLevy}
                    corporateFee={obj.corporateFee}
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
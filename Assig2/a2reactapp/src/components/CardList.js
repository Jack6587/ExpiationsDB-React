import { useEffect, useState } from 'react'
import Card from './Card'

const CardList = ({ }) => {
    const [cardData, setState] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5147/api/Endpoint")
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [])

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
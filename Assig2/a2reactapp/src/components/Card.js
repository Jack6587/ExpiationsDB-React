
function Card({ offenceCode, description, expiationFee, totalFee, demeritPoints, sectionID, sectionCode }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                <h5 className="card-title">{offenceCode} - {description}</h5>
                <p className="card-text">Expiation Fee: {expiationFee}</p>
                <p className="card-text">Total Fee: {totalFee}</p>
                <p className="card-text">Demerit Points: {demeritPoints}</p>
                <p className="card-text">Section ID: {sectionID}</p>
                <p className="card-text">Section Code: {sectionCode}</p>
            </div>
        </div>
    )
}

export default Card;
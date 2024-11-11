
function Card({ expId, offenceCode, totalFeeAmt, regState, vehicleSpeed, cameraTypeCode, issueDate }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                <h5 className="card-title">ID: {expId} - Offence Code: {offenceCode}</h5>
                <p className="card-text">Total Fee Amount: {totalFeeAmt}</p>
                <p className="card-text">Registered State: {regState}</p>
                <p className="card-text">Vehicle Speed: {vehicleSpeed}</p>
                <p className="card-text">Camera Type Code: {cameraTypeCode}</p>
                <p className="card-text">Issue Date: {issueDate}</p>
            </div>
        </div>
    )
}

export default Card;
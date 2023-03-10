import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMoving, faGift, faSpinner, faMobile } from "@fortawesome/free-solid-svg-icons";
import "./style.css"


function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="serv">
                    <FontAwesomeIcon icon={faTruckMoving} />
                    <h5>Free Shipping</h5>
                </div>
                <div className="serv">
                    <FontAwesomeIcon icon={faGift} />
                    <h5>Gift card</h5>
                </div>
                <div className="serv">
                    <FontAwesomeIcon icon={faSpinner} />
                    <h5>7 day return</h5>
                </div>
                <div className="serv">
                    <FontAwesomeIcon icon={faMobile} />
                    <h5>contact us</h5>
                </div>
            </div>
        </div>
    )
}

export default Services;
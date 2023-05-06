import "./button.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Button() {

    return (
        <button className="button">
            <FontAwesomeIcon icon={faEnvelope} className="email-sign" /> Email
        </button>
    )
}

export default Button
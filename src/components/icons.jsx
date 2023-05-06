import "./icons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Icons() {
    return (
        <div className="icons">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
            <FontAwesomeIcon icon={faSquareFacebook} className="facebook" />
            <FontAwesomeIcon icon={faSquareInstagram} className="instagram" />
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            <FontAwesomeIcon icon={faGithub } className="github"/>
        </div>
    )
}


export default Icons;
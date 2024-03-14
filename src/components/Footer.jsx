import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    
                    <Col className="text-center text-sm-end">
                        <div className="social-icon mt-2">
                        <a href="https://www.linkedin.com/in/alexis-creoulo-935534213/"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white' }} /></a>
                            <a href="https://github.com/alexisNorthcoders"><FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} /></a>
                            <p>2024</p>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
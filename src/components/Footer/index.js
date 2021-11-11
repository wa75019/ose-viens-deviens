import './footer.css';
import { Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const index = () => {
    return (
        <Container fluid className="footer ">
            <div className="container flex-column flex-md-row d-flex pt-md-5">
                <div className="footer-item reseaux text-center" >
                    <p>suivez-nous</p>
                    <img src="images/logo-facebook.png" alt="logo facebook"/>
                </div>
                <div className="footer-item plan text-center" >
                    <p>Plan du site</p>
                    <LinkContainer to="/">
                            <Nav.Link className='ovd-headerTitle'>HomePage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Qui-sommes-nous">
                            <Nav.Link className='ovd-headerTitle'>Qui-sommes-nous</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Intervenir">
                            <Nav.Link className='ovd-headerTitle'>Intervenir</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Je-m-inscris">
                            <Nav.Link className='ovd-headerTitle'>Je m'inscris</Nav.Link>
                    </LinkContainer>
                </div>
                <div className="footer-item email text-center">
                    <p>Contact :</p>
                    <a href = "mailto: sbahalaurore@gmail.com" style={{textDecoration: 'none'}}>sbahalaurore@gmail.com</a>
                </div>
            </div>
        </Container>
    )
}

export default index

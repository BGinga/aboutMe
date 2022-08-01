import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {

    return(
        <Container fluid>
            <Row>
                <Col md={12} style={{backgroundColor: '#11426a', paddingTop: '5px'}}>
                    <p style={{color: 'white', textAlign: 'center', paddingTop: '5px'}}>&copy; Copyright 2022, Todos los derechos reservados por Bralink(Brayan Morales)</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

export const Portfolio: NextPage = () => {

    return(
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <p className="customFont">MIS PROYECTOS Y COLLABS</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Portfolio;
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

export const Projects: NextPage = () => {
    return(
        <>
             <Container>
                <Row>
                    <Col md={12}>
                        <p className="customFont">EN ESTO HE ESTADO TRABAJANDO...</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects;
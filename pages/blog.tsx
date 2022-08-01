import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

export const Blog: NextPage = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <p className="customFont">En esto he estado pensando...</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Blog;
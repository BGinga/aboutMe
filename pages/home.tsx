import { NextPage } from "next";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Row  style={{paddingBottom: '20px'}}>
                    <Col md={12}>
                        <p className="customFont">SOBRE MI</p>
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/hi.png"} width={200} fluid/>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '10px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 1.3em 0'}}>
                            <p>
                                ¡Hola!, Mi nombre es Brayan Morales V. y tengo 21 años.
                            </p>
                            <p>
                                Soy de la CDMX y actualmente soy estudiante de séptimo semestre de Ingeniería en Computación en la UNAM.
                                Me dedico a trabajar medio tiempo como Desarrollador Web y he sido participe de múltiples proyectos que me han ayudado a generar conocimiento y experiencia a lo largo de estos años.
                            </p>
                        </div>
                       
                    </Col>
                </Row>

                <Row style={{paddingBottom: '20px'}}>
                    <Col md={12}>
                        <p className="customFont">SOBRE ÉSTA PÁGINA</p>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '10px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 0 1.3em'}}>
                            <p>
                                ¡Gracias por visitar!
                            </p>
                            <p>
                                Ésta pequeña web me ayudará a poder mostrar el conocimiento que he adquerido, así como mis proyectos personales y cosas en las que he estado
                                trabajando, asi como diferentes cosas de interés para las personas que están interesadas en el mundo de la tecnología.
                            </p>
                        </div>
                       
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/about.png"} width={200} fluid/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
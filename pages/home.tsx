import { NextPage } from "next";
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Row  style={{paddingBottom: '20px'}}>
                    <Col md={12}>
                        <p className="customFont" style={{paddingLeft: '5%'}}>SOBRE MI</p>
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/hello.png"} width={400} fluid alt="hello"/>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '15px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 1.3em 0'}}>
                            <p>
                                ¡Hola!, Mi nombre es <b style={{color: '#f2a823'}}>Brayan Morales</b> tengo 21 años y soy mayormente conocido como <b style={{color: '#f2a823'}}>Bralink</b>.
                            </p>
                            <p>
                                Vivo en la CDMX y actualmente soy estudiante de séptimo semestre de Ingeniería en Computación en la UNAM.
                                Me dedico a trabajar medio tiempo como Desarrollador Web y he sido participe de múltiples proyectos que me han ayudado a generar conocimiento y experiencia a lo largo de estos años.
                            </p>
                        </div>
                       
                    </Col>
                </Row>

                <Row style={{paddingBottom: '20px'}}>
                    <Col md={12}>
                        <p className="customFont" style={{paddingLeft: '5%'}} >SOBRE ÉSTA PÁGINA</p>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '20px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 0 1.3em'}}>
                            <p>
                                ¡Gracias por visitar!
                            </p>
                            <p>
                                Ésta pequeña web me ayudará a poder mostrar el conocimiento que he adquerido, así como mis proyectos personales y cosas en las que ando
                                trabajando o tengo en mente, asi como diferentes artículos de interés para las personas que están adentradas en el mundo de la tecnología.
                            </p>
                        </div>
                       
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/shy.png"} width={400} fluid alt="shy"/>
                    </Col>
                </Row>

                <Row  style={{paddingBottom: '40px'}}>
                    <Col md={12}>
                        <p className="customFont" style={{paddingLeft: '5%'}}>MI EXPERIENCIA</p>
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/thinking.png"} width={400} fluid alt="thinking"/>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '20px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 1.3em 0'}}>
                            <p>
                                Mis conocimientos...
                            </p>
                            <p>
                                LLevo casi 4 años como Desarrollador Web, donde he adquirido conocimientos variados como lo es <b style={{color: '#f2a823'}}>HTML , CSS y Javascript</b>.
                            </p>
                            <p>
                                <span style={{display: 'inline-block', fontWeight: 'bold',color: '#f2a823'}}>De lado del FrontEnd: </span>
                                <span style={{display: 'inline-block'}}>
                                    Tecnologías relacionadas como <b style={{color: '#f2a823'}}>JQuery ,React JS con TypeScript, Next JS con Typescript </b> , incluyendo Framworks como lo son Bootstrap(React y JQuery), Kendo UI (React y JQuery) y CORE UI(React) 
                                </span>
                            </p>
                            <p>
                                <span style={{display: 'inline-block', fontWeight: 'bold',color: '#f2a823'}}>De lado del BackEnd: </span>
                                <span style={{display: 'inline-block'}}>
                                    Lenguajes como <b style={{color: '#f2a823'}}>PHP, Python y Java</b>, junto con el conocimiento y consumo de API&apos;s diversas como <b style={{color: '#f2a823'}}>Google Api&apos;s y Torak Api&apos;s </b> 
                                </span>
                            </p>
                            <p>
                                ¡Siempre estoy aprendiendo nuevas cosas!
                            </p>
                        </div>
                       
                    </Col>
                </Row>
                <Row style={{paddingBottom: '20px'}}>
                    <Col md={12}>
                        <p className="customFont" style={{paddingLeft: '5%'}} >TECNOLOGÍAS USADAS</p>
                    </Col>
                    <Col md={9} xs={9}>
                        <div style={{fontWeight: '500', padding: '20px', backgroundColor: "rgba(17,66,106, 0.3)", borderRadius: '1.3em 1.3em 0 1.3em'}}>
                            <p>
                                ¡Es multi-tecnologías!
                            </p>
                            <p>
                                Este sitio fue creado con distintas herramientas y tecnologías y cada una de ellas fue ultilizada de la mejor manera para 
                                brindar un experiencia completa.
                                El listado de cada una de las tecnologías se encuentra en <Link  href={"/tecnologies"}><a className="linkTec"><b style={{color: '#f2a823'}}>Tecnologías</b></a></Link>
                            </p>
                        </div>
                       
                    </Col>
                    <Col md={3} xs={3} style={{display: 'flex', paddingTop: '20px', alignItems: 'end'}}>
                        <Image src={"/images/fly.png"} width={400} fluid alt="fly"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
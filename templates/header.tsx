import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";

export const Header = ({children} :any) => {
    const [activeNav, setActiveNav] = React.useState("Home");
    const router = useRouter();
    
    const setNav = (nav: string) => {
        switch (nav) {
            case "/home":
                setActiveNav("Home")
                break;
            case "/projects":
                setActiveNav("Projects")
                break;
            case "/blog":
                setActiveNav("Blog")
                break;
            case "/portfolio":
                setActiveNav("Portfolio")
                break;
        }
    }

    useEffect(() => {
        setNav(router.pathname);
    }, [router.pathname]);

    return (
        <Container fluid>
            <Row>
                <Navbar style={{backgroundColor: '#11426a', height: 'auto'}} fixed="top" expand="lg">
                    <Container>
                    <Navbar.Brand className="menuTitle" href="/home">
                        <Image src={"/images/bralink.png"} width={200} height={50} fluid alt="bralink"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navBarHeader" style={{color: '#11426a'}} />
                    <Navbar.Collapse id="navBarHeader" className="justify-content-end" style={{backgroundColor: '#11426a'}}>
                        <Nav
                            activeKey="/home"
                            >
                            <Nav.Item>
                                <Link href="/home" >
                                    <a className={`navLink ${activeNav === "Home" ? 'active' : ''}`}>Inicio</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/projects" >
                                    <a className={`navLink ${activeNav === "Projects" ? 'active' : ''}`}>Proyectos</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/blog" >
                                    <a className={`navLink ${activeNav === "Blog" ? 'active' : ''}`}>Blog</a>
                                </Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Link href="/portfolio">
                                    <a className={`navLink ${activeNav === "Portfolio" ? 'active' : ''}`}>Portafolio</a>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Header;
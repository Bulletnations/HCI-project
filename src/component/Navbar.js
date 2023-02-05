import { Navbar,Nav,Container  } from "react-bootstrap";
import { useState, useEffect } from "react";


export const  NavBar = () => {
    const [ activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);


     useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50){
                setscrolled(true);
            }else{
                setscrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll)
     },[])

     const onUpdateActiveLink = (value) => {
        setActiveLink(value);
     } 

    return( 
     <Navbar expand="lg" className={ scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="logo"/>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('slills')}>Skills</Nav.Link>
            <Nav.Link href="#Project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../styles/Navigation.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// const styles = {
//   navbarStyle: {
//     background: 'darkslategrey',
//     justifyContent: 'space-around',
//   },
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navagation({currentPage, handlePageChange}) {
  return (
    // <nav style={styles.navbarStyle} className="navbar">
    //   <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
    //   <a href="#portfolio" onClick={()=>handlePageChange('Portfolio')}>Portfolio</a>
    //   <a href="#contact" onClick={()=>handlePageChange('Contact')}>Contact</a>
    //   <a href="#">Resume</a>
    // </nav>
     <Navbar bg="light" expand="lg">
     <Container>
       <Navbar.Brand href="#home">Cherie Walker</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="#home" onClick={() => handlePageChange('About')}>About</Nav.Link>
           <Nav.Link href="#link" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
           <Nav.Link href="#link" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
           <Nav.Link href="#link">Resume</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  );
}

export default Navagation;

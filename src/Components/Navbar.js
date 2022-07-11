import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">To-Do List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#about">About</Nav.Link>
          </Nav>
          <Nav className="me-1">
            <Nav.Link onClick={props.reset} to="#reset">Reset</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavBar;
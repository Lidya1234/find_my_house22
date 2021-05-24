import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaSearch } from 'react-icons/fa'
import '../style/main.scss'
const Navigation = () => (

<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Navbar.Brand className="brand">House</Navbar.Brand>
   
  <div className="search">
    <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
    <button className="search__submit" aria-label="submit search"><FaSearch /></button>
  </div>

  </Navbar>

);
export default Navigation;

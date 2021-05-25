import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaSearch,FaLessThan } from 'react-icons/fa'
import '../style/main.scss'

const SingleNav = ( { name }) => (
<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

      <Nav.Link href="./"><FaLessThan /></Nav.Link>

      <Navbar.Brand className="brand">{name}</Navbar.Brand>
   
  <div className="search">
    <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
    <button className="search__submit" aria-label="submit search"><FaSearch /></button>
  </div>

  </Navbar>

);

export default SingleNav;

// <Navbar bg="light" variant="light" collapseOnSelect>
// <Navbar.Toggle aria-controls="basic-navbar-nav" />
// <Nav className="mr-auto">
// <Nav.Link href="#home"><FaLessThan /></Nav.Link>
// </Nav>

//     <Navbar.Brand className="singlebrand">{name}</Navbar.Brand>
   
//   <div className="search">
//     <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
//     <button className="search__submit" aria-label="submit search"><FaSearch /></button>
//   </div>

//   </Navbar>

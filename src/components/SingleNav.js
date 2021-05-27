import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { PropTypes } from 'prop-types';
import { FaSearch, FaLessThan } from 'react-icons/fa';
import '../style/main.scss';

const SingleNav = ({ name }) => (
  <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

    <Nav.Link href="./"><FaLessThan /></Nav.Link>

    <Navbar.Brand className="brand">{name}</Navbar.Brand>

    <div className="search">
      <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
      <button type="button" className="search__submit" aria-label="submit search"><FaSearch /></button>
    </div>

  </Navbar>

);
SingleNav.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SingleNav;

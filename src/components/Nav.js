import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// // import {
// //   Page,

// //   NavRight,
// //   Link,
// //   Searchbar,
// //   List,
// //   ListItem,
// //   theme,
// // } from 'framework7-react';

import Nav from 'react-bootstrap/Nav'

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
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    {/* <Nav>
    <Searchbar
        className="searchbar-demo"
        expandable
        searchContainer=".search-list"
        searchIn=".item-title"
        disableButton={!theme.aurora}
      ></Searchbar>
    </Nav> */}
  </Navbar>
);
export default Navigation;

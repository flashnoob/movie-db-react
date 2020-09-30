import React, { Component } from 'react'
import { Nav, Navbar ,Form,Button,FormControl} from "react-bootstrap";
import svg from '../../assets/icons/popcorn.svg'
export default class Navigation extends Component {
  render() {
    return (
<Navbar  expand="lg">
<Navbar.Brand href="#home">
      <img
        src={svg}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>    )
  }
}

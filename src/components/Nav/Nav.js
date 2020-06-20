import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip, Drawer} from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button'

import {Toolbar, SimpleButton} from '@terrestris/react-geo';

import './Nav.css';


export const Navigation = () => {
 
return (
    <>

    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Link to="/"><Navbar.Brand><FontAwesomeIcon icon="store"></FontAwesomeIcon> React-Shop</Navbar.Brand></Link> 
  

    <Nav className="mr-auto">
    <Nav.Link href="/productlist"><strong>Uređaji</strong></Nav.Link>
    
 
  </Nav>
    {/*<Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
  
      
      </Form>
    </Nav>*/}
  </Navbar>









  
  
  </>
);

 
}


import React, {useContext, useEffect} from 'react';
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

  let pathname = window.location.pathname;
  useEffect(() => {
      pathname = window.location.pathname;
  }, [window.location.pathname]);


 
return (
    <>

    <Navbar  id='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand> <Nav.Link style={{fontSize:'30px'}} href="/" className={`${pathname.match('/home') ? 'link-active' : 'nav-link'}`} ><FontAwesomeIcon icon="store"></FontAwesomeIcon> React-Shop</Nav.Link> </Navbar.Brand>
  

    <Nav className="mr-auto">
    <Nav.Link href="/productlist" className={`${pathname.match('/productlist') ? 'link-active' : 'nav-link'}`}><strong>Uređaji</strong></Nav.Link>
    <Nav.Link href="/devices" className={`${pathname.match('/devices') ? 'link-active' : 'nav-link'}`}><strong>Shop</strong></Nav.Link>
    
 
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


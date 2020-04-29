import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import {Toolbar, SimpleButton} from '@terrestris/react-geo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



import {Row, Col} from 'antd';
import Kitchen from '../Products/Kitchen/Kitchen';
import LivingRoom from '../Products/LivingRoom/LivingRoom';
import Bathroom from '../Products/Bathroom/Bathroom';
import Bedroom from '../Products/Bedroom/Bedroom';
import EveryDay from '../Products/EveryDay/EveryDay';


import './Section.css';



export const Section = (props) => {
    return(
       
        <>
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <h5 style={{ padding:'2px', color:'white'}}>Smart Home Devices</h5>
  
    <Nav  style={{marginLeft:'2px'}}>
   
   
    
   <Link class="nav-link" to="/kitchen"><FontAwesomeIcon  icon = "home"/> Kuhinja</Link>
  <Link class="nav-link" to="/livingroom"><FontAwesomeIcon icon = "home"/> Dnevna soba </Link>
  <Link class="nav-link" to="/bathroom"><FontAwesomeIcon icon = "home"/> Kupaonica </Link>
  <Link class="nav-link" to="/bedroom"><FontAwesomeIcon icon = "home"/> Spavaća soba </Link>
  <Link class="nav-link" to="/everyday"><FontAwesomeIcon icon = "home"/> Svakodnevnica </Link> 
 
 
    </Nav>
    
  </Navbar>
  <Switch>
    
   

    <Route path="/kitchen" component={Kitchen}/>
    <Route path="/livingroom" component={LivingRoom}/>
    <Route path="/bathroom" component={Bathroom}/>
    <Route path="/bedroom" component={Bedroom}/>
    <Route path="/everyday" component={EveryDay}/>
   
  </Switch>



      
        </Router>

     
</>

    );
}
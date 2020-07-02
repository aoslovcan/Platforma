import React from 'react';

import { animations, easings } from 'react-animation';

import Footer from '../../components/Footer/Footer';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, Drawer } from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Toolbar, SimpleButton } from '@terrestris/react-geo';
import item1 from '../Home/item.png'

import './Home.css';
import Navigation from '../../components/Nav';
import { pic1 } from '../Home/pic1.PNG';

const title = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
}


export const Home = (props) => {


    return (
         <>
            <div className="cover">
                <div className="text" style={title}>
                    <h1>Dobrodošli u React-Shop</h1>
                    <h3><strong>"</strong>Napravi svoju svakodnevnicu inovativnom<strong>"</strong></h3>
                   
                </div>
                
            </div>
            
         
          
            
           
        </>
    );
}
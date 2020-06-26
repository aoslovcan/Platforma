import React from 'react';

import { animations, easings } from 'react-animation';



import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, Drawer } from 'antd';



import './Footer.css';


const title = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
}


export const Footer = (props) => {


    return (
         <>
            <div className="foot">
               <p>@Made by aoslovcan</p>
            
            </div>
        </>
    );
}

export default Footer;
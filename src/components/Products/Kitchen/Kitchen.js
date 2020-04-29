import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';








class  Kitchen extends React.Component {
    state ={
        products : [
            {name: 'Perilica posuđa', price:'3500 kn', 
            description:'Ovo je pametna perilica posuđa'},
            {name: 'Mikser', price:'5500 kn', 
            description:'Ovo je pametni mikser'},
            {name: 'Pećnica', price:'10000 kn', 
            description:'Ovo je pametna pećnica'},
        
            
        ]
    };

   
    
    
   render(){

  




    return(
        <>
    
    <div className="row" >
    
    
    {this.state.products.map((product, i) =>
    <div className="col-sm-4" key={i} style={{maxWidth:'33%', padding:'1px', margin:'1px'}} >
  <ul className="list-group" style={{ padding:'1px', marginLeft:'1px'}} >
      
        
         <li className="list-group-item">{product.name}</li> 
          <li className="list-group-item">{product.price}</li> 
          <li className="list-group-item">{product.description}</li> 
          </ul>
          </div>
   
    )
 
    }
  
   </div>

  
</>
    );
}
}

export default Kitchen;
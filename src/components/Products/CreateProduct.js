import React, { Component } from 'react';
 
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip, Drawer} from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {Toolbar, SimpleButton} from '@terrestris/react-geo';

import axios from 'axios'
import {createDevice} from '../../actions/createDevice';




class  CreateProduct extends Component {

    constructor(props){
        super(props)

        this.state = {
         
            name : '',
            price: '',
            description: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }  
    
    changeHandler = x => {
        this.setState({[x.target.name]: x.target.value})
    }

   

  
    handleSubmit(e){
      e.preventDefault();
      const data = this.state;
      console.log(data);
    
    fetch('http://localhost:3001/new', {
        method: 'POST',  
        body: JSON.stringify({name : this.state.name,
        price: this.state.price,
      description: this.state.description

  }),  
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
     
      .then((result) => {
        console.log(result);
        
        this.setState({redirect : true});
       window.location.href = 'http://localhost:3000/productlist';
    })
      }

   


  

render(){

     const{name, price, description} = this.state
     return(
            <> 
            <h3></h3>
            <div className="container">
            <div className="row">
<form onSubmit={this.handleSubmit}  action={this.props.action}
                    method={this.props.method} >
  <div className="form-group">
  
    <input type="text" 
    value={name} name="name" 
    onChange={this.changeHandler}
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="naziv"
    
    />
  
  </div>
  <div className="form-group">
   
    <input type="text" 
    value={price} 
    onChange={this.changeHandler}
    name="price" 
    className="form-control" id="exampleInputPassword1" 
    placeholder="cijena"
    />
  </div>
  <div className="form-group">
   
    <textarea 
    value={description} 
    onChange={this.changeHandler}
    name="description" 
    className="form-control"  
    placeholder="cijena"
    >
        </textarea>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        
    
</div>
</div>
            </>
       
      
      
          );
    
    
  }

} 

CreateProduct.defaultProps = {
  action: 'http://localhost:3001/new',
  method: 'post'
};


export default CreateProduct;
    


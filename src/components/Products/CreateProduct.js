import React, { Component } from 'react';
 
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip, Drawer} from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {Toolbar, SimpleButton} from '@terrestris/react-geo';





class  CreateProduct extends Component {

    constructor(props){
        super(props)

        this.state = {
            userId: '',
            name : '',
            price: '',
            description: ''

        }
    }
    
    changeHandler = (x) => {
        this.setState({[x.target.name]: x.target.value})
    }
 
    submitHandler = e => {

        e.preventDefault()
        console.log(this.state)
    }


   render(){
       const{name, price, description} = this.state
     return(
            <> 
            <div className="container">
            <div className="row">
<form onSubmit={this.submitHandler}>
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
export default CreateProduct;
    


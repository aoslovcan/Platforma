import React, { Component } from 'react';
 
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './ProductList.css';


class  ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        fetch('http://localhost:3001/devices')
        .then(res => res.json())
        .then(json =>{
            this.setState({
                isLoaded:true,
                items : json,
                id: ''
            })
        });

        console.log(this.state.items);
    }

    deleteMember(){
        var data = {
            id: this.state.id
        }
        console.log(data);
        fetch("http://localhost:3001/delete", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            if(data === "success"){
               this.setState({msg: "User has been deleted."});
               window.location.reload();
            }
           
        }).catch(function(err) {
            console.log(err)
        });
    }
 


   render(){
        var {isLoaded, items} = this.state;

        if(!isLoaded){
        return <div>Loading...</div>;
        }
        else{

        return(
            <>
        <div className="proizvodi">
            <h3 style={{color:'black'}}>Pametni uređaji iz kućanstva</h3>
           <div className="row" style={{margin:'2px'}}>
          
            {items.map(item => (
            <div className="col-sm-3">
             <ul className="list-group" key={item.id}>
                <li className="list-group-item">
                <img style={{maxWidth:'200px', width:'100%'}} src={item.image}/>
                </li>
                 <li className="list-group-item" >
                  {item.name}
                </li>
                <li className="list-group-item" >
                   <strong>${item.price}</strong>
                </li>
                <li className="list-group-item" >
                   {item.description}
                </li>
                <li className="list-group-item">
                   <button type="submit" onClick={() => this.setState({id : item.devices_id}, this.deleteMember)} > 
                   <FontAwesomeIcon color="red" icon="trash"/>
                   
                    </button>
                </li>
            </ul>
            </div>
               ))}
           </div>
        </div>
            </>
       
      
      
          );
    }
    
  }

}
export default ProductList;
    


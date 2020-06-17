import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, Drawer } from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Toolbar, SimpleButton } from '@terrestris/react-geo';

import axios from 'axios'





class EditProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
  
      redirect : false,
      id : '',
      name : '',
      description : '',
      image : ''
     
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);


  }

  changeHandler(e)  {

    const target = e.target;
    
    const value = target.value;
 
    const name = target.name;
  

    console.log(e.target.name);
    this.setState({
     [e.target.name] : e.target.value
    });

    

   
  }

  componentDidMount(){
    let meetupId = this.props.match.params.id;
    fetch('http://localhost:3001/devices/'+meetupId+'')
    .then(res => res.json())
    
    
    .then(json =>{
      let id = json.map(m => m.devices_id);
      let name = json.map(m => m.name);
      let price = json.map(m => m.price);
      let image = json.map(m => m.image);
      let description = json.map(m => m.description);
        this.setState({
            isLoaded:true,
          
            //items: json
            id : id.toString(),
            name : name.toString(),
            price: price.toString(),
            image: image.toString(),
            description : description.toString()

          

        })
     
        
    });
       
       
  }

    




  /*formValidate = () =>{
    let name = this.state.name;
    let price = this.state.price;
    let url = this.state.image;
   let description = this.state.description;

    let nameError = "";
    let priceError= "";
    let urlError="";
    let descError="";

    if (!name){
      nameError = 'Naziv mora biti unesen!';
    }

     if(!price){
      priceError = 'Cijena mora biti unesena!';
    }

   if(!url){
      urlError = 'Unesite url slike!';
    }

    if(!description){
      descError = 'Opis proizvoda mora biti unesen!';
     
    }
    this.setState({nameError, priceError, urlError, descError});

    if(nameError || priceError || urlError || descError){
     
      return false;
    }

    return true;

  };*/


  handleSubmit(e) {
    e.preventDefault();
    const data = {
      id : this.state.id,
      name : this.state.name,
      price : this.state.price,
      image : this.state.image,
      description : this.state.description
    };
    console.log(data);

    //const isValid = this.formValidate();

    //console.log(isValid);
const body = this.state.items;
console.log(body);
   
      fetch('http://localhost:3001/update', {
        method: 'POST',
        body: JSON.stringify(
            data
        ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  
        .then((result) => {
          console.log(result);
  
          this.setState({
            redirect: true
          });
          window.location.href = 'http://localhost:3000/productlist';
        })
    
   
    
  }





  render() {

    const { name, price, description, image, nameError, priceError, urlError, descError, meetupId, items} = this.state

    return (
      <>
 
        <div className="container" style={{ backgroundColor: '#343a40', borderRadius: '28px' }}>
          <div className="row" id="unos" >
            <div class="col-6 offset-3">
              <h4>Osnovni podaci o uređaju</h4>
              <form onSubmit={this.handleSubmit}
                action={this.props.action}
                method={this.props.method} >
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label"> Naziv uređaja: </label>
               
                  <div class="col-sm-9">
                  {/*items.map(m => m.name.toString())*/}
                    <input type="text"
                     value={name/*items.map(m => m.name.toString())*/}
                    
                     //value="vrijednost"
                     name="name"
                      onChange={this.changeHandler}
                      className="form-control"
                      /*id="exampleInputEmail1" 
                      aria-describedby="emailHelp" */
                      placeholder="naziv" />
                    {/*nameError ? (<span style={{color:'red'}}>{nameError}</span>) : null */}
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">Cijena:</label>
                  
                  <div class="col-sm-9">
                  {items.map(m => m.price.toString())}
                    <input type="text"
                      value={ price/*items.map(m => m.price.toString())*/}
                      onChange={this.changeHandler}
                      name="price"
                      className="form-control" /*id="exampleInputPassword1" */
                      placeholder="cijena" />
                       {/*priceError ? (<span style={{color:'red'}}>{priceError}</span>) : null */}
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">URL slike:</label>
                 
                  <div class="col-sm-9">
                 <img style={{width:'50px', height:'50px'}}src= {items.map(m => m.image.toString())}/>
                    <input type="text"
                      value={image/*items.map(m => m.image.toString())*/}
                      //value={name}
                      onChange={this.changeHandler}
                      name="image"
                      className="form-control" /*id="exampleInputPassword1" */
                      placeholder="url slike" />
                       {/*urlError ? (<span style={{color:'red'}}>{urlError}</span>) : null */}
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">Opis:</label>
                 
                  <div class="col-sm-9">
                  {items.map(m => m.description.toString())}
                    <textarea
                      value={description/*items.map(m => m.description.toString())*/}
                      onChange={this.changeHandler}
                      name="description"
                      className="form-control"
                      placeholder="opis proizvoda">
                         
                    </textarea>
                    {/*descError ? (<span style={{color:'red'}}>{descError}</span>) : null */}
                  </div>
                </div>
                <button type="submit" className="btn btn-outline-light"><strong>Unesi</strong></button>
                <button type="submit" className="btn btn-outline-light"><strong>Odustani</strong></button>
              </form>
            </div>
          </div>
        </div>


      </>



    );
  }
}


export default EditProduct;



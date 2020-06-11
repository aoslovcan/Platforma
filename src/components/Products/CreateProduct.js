import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, Drawer } from 'antd';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Toolbar, SimpleButton } from '@terrestris/react-geo';

import axios from 'axios'
import { createDevice } from '../../actions/createDevice';

import './CreateProduct.css'


class CreateProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {

      name: '',
      price: '',
      description: '',
      redirect: false,
      image: '',
      nameError : '',
      priceError : '',
      urlError : '',
      descError: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeHandler = x => {
    this.setState({
      [x.target.name]: x.target.value
    })
  }

  formValidate = () =>{
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

  };


  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log(data);

    const isValid = this.formValidate();

    console.log(isValid);

    if(isValid){
      fetch('http://localhost:3001/new', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          price: this.state.price,
          description: this.state.description,
          image: this.state.image
  
        }),
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
   
    
  }





  render() {

    const { name, price, description, image, nameError, priceError, urlError, descError } = this.state
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
                    <input type="text"
                      value={name} name="name"
                      onChange={this.changeHandler}
                      className="form-control"
                      /*id="exampleInputEmail1" 
                      aria-describedby="emailHelp" */
                      placeholder="naziv" />
                    {nameError ? (<span style={{color:'red'}}>{nameError}</span>) : null }
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">Cijena:</label>
                  <div class="col-sm-9">
                    <input type="text"
                      value={price}
                      onChange={this.changeHandler}
                      name="price"
                      className="form-control" /*id="exampleInputPassword1" */
                      placeholder="cijena" />
                       {priceError ? (<span style={{color:'red'}}>{priceError}</span>) : null }
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">URL slike:</label>
                  <div class="col-sm-9">
                    <input type="text"
                      value={image}
                      onChange={this.changeHandler}
                      name="image"
                      className="form-control" /*id="exampleInputPassword1" */
                      placeholder="url slike" />
                       {urlError ? (<span style={{color:'red'}}>{urlError}</span>) : null }
                  </div>
                </div>
                <div className="form-group row">
                  <label class="col-sm-3 col-form-label">Opis:</label>
                  <div class="col-sm-9">
                    <textarea
                      value={description}
                      onChange={this.changeHandler}
                      name="description"
                      className="form-control"
                      placeholder="opis proizvoda">
                         
                    </textarea>
                    {descError ? (<span style={{color:'red'}}>{descError}</span>) : null }
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

CreateProduct.defaultProps = {
  action: 'http://localhost:3001/new',
  method: 'post'
};


export default CreateProduct;



import React, { Component } from 'react';
import {formValidate} from '../../actions/formValidate';
import {createDevice} from '../../actions/createDevice'
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
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeHandler = x => {
    this.setState({
      [x.target.name]: x.target.value
    })
  }

   handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log(data);

    //Form validation
    const isValid = formValidate(data);

    console.log(isValid);
    //Check validation 
    if(isValid){
      /* Create data*/
      
      createDevice(data);
    }
}





  render() {

    const { name, price, description, image} = this.state
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
                      <span id = "nameError" style={{color:'red'}}></span>
                    {/*nameError ? (<span style={{color:'red'}}>{nameError}</span>) : null */}
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
                       <span id = "priceError" style={{color:'red'}}></span>
                       {/*priceError ? (<span style={{color:'red'}}>{priceError}</span>) : null */}
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
                      <span id="urlError" style={{color:'red'}}></span>
                       {/*urlError ? (<span style={{color:'red'}}>{urlError}</span>) : null */}
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
                    <span id="descError" style={{color:'red'}}></span>
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

CreateProduct.defaultProps = {
  action: 'http://localhost:3001/new',
  method: 'post'
};


export default CreateProduct;



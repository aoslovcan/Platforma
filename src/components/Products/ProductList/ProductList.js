import React, { Component } from 'react';

import { animations, easings } from 'react-animation';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import { deleteProduct } from '../../../actions/deleteProduct';


import ReactPaginate from 'react-paginate';

import './ProductList.css';
import { none } from 'ol/centerconstraint';
import Footer from '../../Footer/Footer';


const style = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
  }

const title = {
    animation : animations.slideIn,
    color: "black",
    border: "none"
}

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false,
            id: "",
            
        }

         
    }
   
  
   componentDidMount() {

        fetch('http://localhost:3001/devices')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    id: ''
                })
                console.log(json)
            });

        console.log(this.state.items);
    }


    deleteMember() {
        var data = {
            id: this.state.id
        }
        console.log(data);

        deleteProduct(data.id);

    }

    //Proba za dohvat vrijednosti

    myFunction = e =>  {
            

            const target = e.target;
            console.log(target);
    
            const value = target.value;

            console.log(value);
         
            const name = target.name;

            console.log(name);


            
    }



    render() {
        var { isLoaded, items, didMount } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {

            return (
                <>
             
                    <div className="proizvodi">
                      
                            <div className="col-sm-12">
                        <Nav.Link style={title} href="/create">
                            <button title="Dodaj" className="delete" >
                            <FontAwesomeIcon className="fa-lg" color="white" icon="plus"/>
                            </button>
                         </Nav.Link>
                        </div>
                      
                        <div className="row" style={{ margin: '2px' }}>
                            {items.map(item => (
                                <div className="col-sm-3" key={item.devices_id} style={style}>
                                    <ul className="list-group" >
                                        <li className="list-group-item">
                                            <form>
                                                <input type="checkbox" onClick= {this.myFunction} id="proizvod" name="devices" value={item.devices_id} />
                                            </form>

                                        </li>
                                        <li className="list-group-item" style={{textAlign: 'center'}}>
                                            <img style={{ maxWidth: '130px', width: '100%', height:'120px', textAlign:"center", borderRadius:'10px'}} src={item.image} />
                                        </li>
                                        <li className="list-group-item" >
                                            <strong>{item.name}</strong>
                                        </li>
                                        <li className="list-group-item" >
                                            <strong>${item.price}</strong>
                                        </li>
                                        <li className="list-group-item" >
                                            <strong>{item.description}</strong>
                                        </li>
                                        <li style={{textAlign: 'center'}} className="list-group-item">
                                            <button title="Obriši" className="delete" type="submit"
                                                onClick={() => this.setState({ id: item.devices_id },
                                                    this.deleteMember, window.location.reload(false)
                                                )} >
                                                <FontAwesomeIcon color="white" size="1x" icon="trash" />

                                            </button>
                                            <Link  to={`/update/${item.devices_id}`}> <button title="Izmjeni" className="delete" >
                                                <FontAwesomeIcon color="white" size="1x" icon="pen" />
                                            </button></Link>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                  
                 <Footer/>
                </>



            );
        }

    }

}
export default ProductList;





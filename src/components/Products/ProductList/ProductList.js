import React, { Component } from 'react';

import { animations, easings } from 'react-animation';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { deleteProduct } from '../../../actions/deleteProduct';

import './ProductList.css';

const style = {
    animation: `pop-in ${easings.easeOutExpo} 1000ms forwards`
  }

const title = {
    animation : animations.slideIn,
    color: "black"
}

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false,
            id: "",
            didMount: false
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


            this.setState({items : value})
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
                        <h3 style={title}>Pametni uređaji iz kućanstva</h3>
                        <div className="row" style={{ margin: '2px' }}>

                            {items.map((item) => (
                                <div className="col-sm-3" key={item.devices_id} style={style}>
                                    <ul className="list-group" >
                                        <li className="list-group-item">
                                            <form>
                                                <input type="checkbox" onClick= {this.myFunction} id="proizvod" name="devices" value={item.devices_id} />
                                            </form>

                                        </li>
                                        <li className="list-group-item">
                                            <img style={{ maxWidth: '200px', width: '100%', height:'200px', textAlign:"center" }} src={item.image} />
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
                                            <button type="submit"
                                                onClick={() => this.setState({ id: item.devices_id },
                                                    this.deleteMember, window.location.reload(false)
                                                )} >
                                                <FontAwesomeIcon color="red" icon="trash" />

                                            </button>
                                            <Link className="btn" to={`/update/${item.devices_id}`}> Edit</Link>
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





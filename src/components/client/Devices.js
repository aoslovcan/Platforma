import React, { Component } from 'react';

import { animations, easings } from 'react-animation';

import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Devices.css';

import Modal from 'react-bootstrap/Modal'



import { none } from 'ol/centerconstraint';

const style = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
}

const title = {
    animation: animations.slideIn,
    color: "black",
    border: "none"
}



class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false,
            id: "",
            name: "",
            price: "",
            image : "",
            description : "",
            offset: 0,

            perPage: 7,
            currentPage: 0,
            show: false
        }
       
    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

      onClose = e => {
        this.setState({
            show: false
          });
      };
    receivedData() {
        axios
            .get('http://localhost:3001/devices')
            .then(res => {

                const data = res.data;
                console.log(data);
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
                console.log(slice);
                const postData = slice;
                console.log(postData.name)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    items: postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }

  add(id){

console.log(id);

    fetch('http://localhost:3001/devices/'+id+'')
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

    render() {
        var { isLoaded, items, didMount } = this.state;
       


        return (
            <>

            <div className="devices">
                    <div className="row" style={{ margin: '0.5px' }}>
                        <div className="col-sm-12"   style={{position: 'fixed', width: '100%', zIndex:'2'}}>
                            <ReactPaginate
                                previousLabel={<FontAwesomeIcon icon="arrow-left" />}
                                nextLabel={<FontAwesomeIcon icon="arrow-right" />}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />

                        </div>
                    </div>

                    <div className="row" style={{position: 'relative', top:'60px'}}>
                        {items.map(item => (
                          <div className="col-sm-3" key={item.devices_id} style={style}>


                                <div className="col-sm-12">
                                    <img style={{ maxWidth: '300px', width: '100%', height: '290px', textAlign: "center", borderRadius: '10px' }} src={item.image} />

                                </div>
                                <div id="itemContent" className="col-sm-12">
                                   
                                    <strong><h5>{item.name} ${item.price}</h5></strong>
                                    <button onClick={e => { this.showModal(); this.add(item.devices_id)}}>Open Modal</button>
                                </div>


                            </div>
                        
                        ))}
                    </div>
                </div>

                <Modal className="modal" onClose={this.showModal} show={this.state.show}>
                    Message in Modal

                    {this.state.name}
                    <button className="delete" onClick={e => {this.onClose();}}
          >
            Close
          </button>
                </Modal>
        
  

            </>



        );


    }

}
export default Devices;





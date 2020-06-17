import fetch from 'isomorphic-fetch';

// * snip *

 

export function createDevice (data) {
    return fetch('http://localhost:3001/new', {
        method: 'POST',
        //mode: 'CORS',
        body: JSON.stringify({
            name: data.name,
            price: data.price,
            description: data.description,
            image: data.image,

        }),

        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
    
          .then((result) => {
            console.log(result);
    
            window.location.href = 'http://localhost:3000/productlist';
          })
    

}

 /*fetch('http://localhost:3001/new', {
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
        })*/
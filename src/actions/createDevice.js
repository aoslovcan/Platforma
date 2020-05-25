import fetch from 'isomorphic-fetch';

// * snip *

 

export function createDevice (data) {
    return fetch('http://localhost:3000/new', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify({
            name : data.name,
            price : data.price,
            description : data.description
        }),

        
        headers: {
            'Content-Type': 'application/json'
        }

       
  
  
    }).then(res => {
        return res;
    }).catch(err => err);
    

}
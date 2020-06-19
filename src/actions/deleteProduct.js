import fetch from 'isomorphic-fetch';


export function deleteProduct(id) {
    var data = {
        id: id
    }
    console.log(data);
    fetch("http://localhost:3001/delete", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (data) {
        if (data === "success") {
            console.log('Uspješno uneseno');
        }
        window.location.reload(false)

    }).catch(function (err) {
        console.log(err)
    });

}
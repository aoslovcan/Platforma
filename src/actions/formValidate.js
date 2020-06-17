export function formValidate(data)
{
    let nameError = "";
    let priceError ="";
    let urlError = "";
    let descError ="";

    if (!data.name){
     nameError = 'Naziv mora biti unesen!';
      document.getElementById('nameError').innerHTML = nameError;
      console.log(nameError);
    }

     if(!data.price){
       priceError = 'Cijena mora biti unesena!';
      document.getElementById('priceError').innerHTML = priceError;
      console.log(priceError);
    }

   if(!data.image){
      urlError = 'Unesite url slike!';
      document.getElementById('urlError').innerHTML = urlError;
      console.log(urlError);
    }

    if(!data.description){
     descError = 'Opis proizvoda mora biti unesen!';
      document.getElementById('descError').innerHTML = descError;
      console.log(urlError);
     
    }
    //this.setState({nameError, priceError, urlError, descError});

    if(nameError || priceError || urlError || descError){
     
      return false; 
    }
    
    return true;
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
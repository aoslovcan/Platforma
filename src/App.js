import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Navigation from './components/Nav';
import ProductList from './components/Products/ProductList/ProductList';

import {library} from '@fortawesome/fontawesome-svg-core';

import {faStore, faShoppingCart, faHome, faBlender, faCouch,
   faBed, faShower, faRunning, faPlus} 
   from '@fortawesome/free-solid-svg-icons';
   
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateProduct from './components/Products/CreateProduct';



library.add(faStore, faShoppingCart, faHome, faBlender, faCouch, faBed, faShower, faRunning, faPlus);

function App() {
  return (
    <Router>
      
    <div className="App">
   <Navigation/>
    <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/productlist" component={ProductList}/>
      <Route path="/create" component={CreateProduct}/>
      <Route path="http://localhost:3001/new" component={CreateProduct}/>
      
     
      
    </Switch>

    </div>

    </Router>
  );
}

export default App;

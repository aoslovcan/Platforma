import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Navigation from './components/Nav';
import ProductList from './components/Products/ProductList';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faStore, faShoppingCart, faHome, faBlender, faCouch, faBed, faShower, faRunning, faPlus} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


library.add(faStore, faShoppingCart, faHome, faBlender, faCouch, faBed, faShower, faRunning, faPlus);

function App() {
  return (
    <Router>
      
    <div className="App">
   <Navigation/>
    <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/productlist" component={ProductList}/>
     
      
    </Switch>

    </div>

    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Navigation from './components/Nav';
import Section from './components/Section';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStore, faShoppingCart, faHome} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Kitchen from './components/Products/Kitchen/Kitchen';
import Bedroom from './components/Products/Bedroom/Bedroom';
import Bathroom from './components/Products/Bathroom/Bathroom';
import LivingRoom from './components/Products/LivingRoom/LivingRoom';
import EveryDay from './components/Products/EveryDay/EveryDay';

library.add(faStore, faShoppingCart, faHome);

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
    <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/section" exact component={Section}/>
      
    </Switch>

    </div>
    </Router>
  );
}

export default App;

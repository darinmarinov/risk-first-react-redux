import React from 'react';
import Items from './components/Items'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SelectItem from './components/SelectItem'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar></Navbar>
          <Switch>
            <Route path='/' exact component={Items} />
            <Route path='/item/:id'  component={SelectItem} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

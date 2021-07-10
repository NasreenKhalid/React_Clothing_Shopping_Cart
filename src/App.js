import React from 'react'
import {Home} from './components/Home'
import {Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
import {About} from './components/About'
import {Cart } from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import {Table} from './components/Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/cart">
        <Cart />
        </Route>
      <Route path="/about">
      <About />
      </Route>
     {/* <Table /> */}
     
      </Switch>
      <Footer />
      </Router>
     
    </div>
  );
}

export default App;

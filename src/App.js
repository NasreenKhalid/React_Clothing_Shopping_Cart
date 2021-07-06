import React from 'react'
import {Home} from './components/Home'
import {Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
// import {Table} from './components/Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Home />
     {/* <Table /> */}
     <Footer />
    </div>
  );
}

export default App;

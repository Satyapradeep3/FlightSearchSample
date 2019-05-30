import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './component/Header';
import Search from './component/Search';
import FlightSearch from './component/FlightSearch';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header />
      <Route exact path='/' component={()=><Search/>}/>
      <Route path='/FlightSearch'  component={FlightSearch} />
      </BrowserRouter>
    </div>
  );
}

export default App;


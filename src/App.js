import React from 'react';
import './App.css';
import Header from './component/Header'
import Catogeries from './component/Catogeries'
import Poster from './component/Poster'
import Lastsearch from './component/Lastsearch'
import FreshRrecommand from './component/Freshrecomand'
import Footerimage from './component/Footer1stimg'
import TryOlxApp from './component/TryOlxApp'
import FooterCatogeries from './component/FooterCatogeries';
import CopyWrite from './component/Copywrite'
import FreshRecomandationProduct from './component/FreshRecomandationProduct'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Catogeries />
      <Poster /> 
      <Lastsearch />
      <Router>
      <Switch>
      <Route exact path='/' component={FreshRrecommand}  ></Route>
      <Route  exact path='/product/:id' component={FreshRecomandationProduct} ></Route>
      </Switch>
      </Router>
      <Footerimage />
      <TryOlxApp />
      <FooterCatogeries />
      <CopyWrite />
    </div>
  );
}

export default App;

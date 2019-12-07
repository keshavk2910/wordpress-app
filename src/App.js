import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

//components
import Header from './components/header/header.component';

//pages
import Homepage from './pages/Homepage/Homepage';
import Products from './pages/Products/Products';
import About_us from './pages/About_us/About_us';
import Contact_us from './pages/Contac_us/Contact_us';
import Single from './pages/single/single.component';
import SingleProduct from './pages/single-product/Single-Product';
import ErrorPage from './pages/error';

class App extends Component {
  
  render() { 
    return (
      <Router  basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Header/>
        <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/products" component={Products}/>
      <Route path="/about-us" component={About_us}/>
      <Route path="/contact-us" component={Contact_us}/>
      <Route path="/single/:id" component={Single}/>
      <Route path="/product/:id" component={SingleProduct}/>
      <Route component={ErrorPage}/>
      </Switch>
    </div>
    </Router>
    );
}
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import Header from './components/header/header.component';

//pages
import Homepage from './pages/Homepage/Homepage';
import About_us from './pages/About_us/About_us';
import Contact_us from './pages/Contac_us/Contact_us';
import ErrorPage from './pages/error';

class App extends Component {



  render() { 
    return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/about-us" component={About_us}/>
      <Route path="/contact-us" component={Contact_us}/>
      <Route component={ErrorPage}/>
      </Switch>
    </div>
    )
}
}

export default App;

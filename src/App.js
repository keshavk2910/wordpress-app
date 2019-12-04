import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

//components
import Header from './components/header/header.component';

//pages
import Homepage from './pages/Homepage/Homepage';
import About_us from './pages/About_us/About_us';
import Contact_us from './pages/Contac_us/Contact_us';
import Single from './components/single/single.component';
import ErrorPage from './pages/error';

class App extends Component {
  
  render() { 
    return (
      <Router>
    <div className="App">
    <Header/>
        <Switch>
      <Route exact path="/wordpress-app/" component={Homepage}/>
      <Route path="/wordpress-app/about-us" component={About_us}/>
      <Route path="/wordpress-app/contact-us" component={Contact_us}/>
      <Route path="/single/:id" component={Single}/>
      <Route component={ErrorPage}/>
      </Switch>
    </div>
    </Router>
    );
}
}

export default App;

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Home1 from  './components/Home1/Home1';
import Dashboard from  './components/Dashboard/Dashboard';
import Deals from  './components/Deals/Deals';
import Contacts from  './components/Contacts/Contacts';
import Tasks from  './components/Tasks/Tasks';
import Profile from  './components/Profile/Profile';


import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/helloworld" component={HelloWorld}/>
        <Route path="/Deals" component={Deals}/>
        <Route path="/Contacts" component={Contacts}/>
        <Route path="/Tasks" component={Tasks}/>
        <Route path="/Profile" component={Profile}/>

        <Route path= "/Home1" component={Home1}/>



        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));

import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';


import {ImagesList} from './Galery'
import {Heading} from '../components/Heading';
import {SinglePhoto} from './SinglePhoto';
import {UnregisterPage} from './UnregistredPage';
import {AuthPG} from './Auth'




export const useRouters = (isAuthenticated) => {
  if (isAuthenticated ) {
    return (
    <Router>
    <Heading className = "heading"/>
    <Switch>
      <Route path="/" exact component = {ImagesList} />
      <Route path="/SinglePhoto:id" component = {SinglePhoto} />
      <Redirect to="/" />
    </Switch>
    </Router>
    );
  }

    return (
    <Router>
    <Switch>
      <Route path="/" exact component = {UnregisterPage} />
      <Route path="/Home" exact component = {AuthPG} />
      <Redirect to="/" />
    </Switch>
    </Router>
    );
}
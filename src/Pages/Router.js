import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import {ImagesList} from './Galery'
import {Heading} from '../Helpers/Heading';
import {SinglePhoto} from './SinglePhoto';
import {UnregisterPage} from './unregistred';
import {AuthPG} from './Auth'

const GlobalStyle = createGlobalStyle`
*{
  margin:2px;
  padding:0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
`;


export const useRouters = isAuthenticated => {
  if (isAuthenticated) {
    return (
    <Router>
    <Heading className = "heading"/>
    <GlobalStyle/>
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
    <GlobalStyle/>
    <Switch>
      <Route path="/" exact component = {UnregisterPage} />
      <Route path="/Home" exact component = {AuthPG} />
      <Redirect to="/" />
    </Switch>
    </Router>
    );
}
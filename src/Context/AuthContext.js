import {createContext} from 'react';

function nothing() {}

export const AuthContext = createContext({
  access_token: null,
  refresh_token: null,
  login: nothing,
  logout: nothing,
  isAuthenticated: false
})

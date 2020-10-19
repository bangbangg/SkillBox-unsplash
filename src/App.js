import React from 'react';
import {useRouters} from './Pages/Router'
import {useAuth} from './Hooks/auth_hook'
import {AuthContext} from './Context/AuthContext'


function App() {
  const {login, logout, access_token, refresh_token} = useAuth()
  const isAuthenticated = !!access_token
  const routes = useRouters(isAuthenticated);
  return (
    <AuthContext.Provider value = {{
      login, logout, access_token, refresh_token
    }}>
    <div className="App">
      {routes}     
    </div>
    </AuthContext.Provider>
  );
}

export default App;

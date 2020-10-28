import React from 'react';

import { useSelector } from 'react-redux';
import { useRouters } from './Pages/Router'


function App() {
  const isAuthenticated = useSelector(state=>state.isAuthorized)
  const routes = useRouters(isAuthenticated);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

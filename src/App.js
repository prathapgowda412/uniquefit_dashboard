import React from 'react';
import MainLayouts from './layouts/MainLayouts';
import AdminLogin from './Login/Login';

function App() {
  // const isLogged = true;

  let adminToken = localStorage.getItem('adminToken');
  if (adminToken) {
    return <MainLayouts />;
  } else {
    return <MainLayouts />;
  }
}

export default App;

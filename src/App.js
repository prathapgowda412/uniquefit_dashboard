import React from 'react';
import MainLayouts from './layouts/MainLayouts';
import AdminLogin from './Login/Login';

function App() {
  const isLogged = false;
  if (isLogged) {
    return <MainLayouts />;
  } else {
    return <AdminLogin />;
  }
}

export default App;

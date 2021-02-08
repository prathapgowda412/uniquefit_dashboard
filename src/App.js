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
// will figure it on 12th till then i have exams to complete okok bye bye take care thank you bye
export default App;

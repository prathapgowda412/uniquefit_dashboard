import './App.css';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from './views/dashboard';
// import Products from './views/products';
import Routing from './routing';
import GlobalStyles from './components/GlobalStyles';
// import Routing from "./routing";
// import theme from 'src/theme';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import routes from '../src/routes';
function App() {
  // const routing = useRoutes(routes);
  return <>helo</>;
}

export default App;

// <>
//   {/* // <ThemeProvider theme={theme}> */}
//   <GlobalStyles />
//   {routing}
//   {/* </ThemeProvider> */}
// </>

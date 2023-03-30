import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify'
import RoutesMain from './routes/routes';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;

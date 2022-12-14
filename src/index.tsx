import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function getLibrary(provider:any) {
  const library = new Web3Provider(provider, "any");
  return library;
}

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);

reportWebVitals();

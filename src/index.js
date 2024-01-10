import React, {useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RenderPage from "./pages/renderPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
          <RenderPage />

  </React.StrictMode>
);

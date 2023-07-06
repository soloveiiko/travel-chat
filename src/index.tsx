import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <Provider store={store}>
          <App/>
      </Provider>
  </BrowserRouter>
);

/* import ReactDOM from "react";
import App from "./App";
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"));*/

import ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css'
import React from 'react';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="mt-3 ms-2"><img src={logo} className="App-logo" alt="logo" width="50px" />React Weather app.</h1>
        <Weather city="Sherbrooke" />
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

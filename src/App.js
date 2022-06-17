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
          <p><a href="https://github.com/QueenJammie/weather/tree/master/src">Open-source code</a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search">Jammie Lachance-Côté</a></p>
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

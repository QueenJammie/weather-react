import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Forecast from "./Forecast";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <body>
    <div className="container">
      <div className="App">
        <div className="row">
          <h1 class="ms-2"><img src={logo} className="App-logo" alt="logo" width="50px" />React Weather app.</h1>
        </div>
          <div class="row">
          <div class="col-6">
            <a href="/" className="list-cities">Sherbrooke</a><a href="/" className="list-cities">Montreal</a><a href="/" className="list-cities">Paris</a><a href="/" className="list-cities">London</a>
            <input type="search" placeholder="Enter a city" class="form-control mb-3" />
          </div>
          <div className="col-2">
            <br />
            <input type="submit" value="Search" className="btn btn-primary me-2" />
            <button className="btn btn-success">Current</button>
          </div>
        </div>
          <Weather city="Sherbrooke" />
          <Forecast city="Sherbrooke"className="mt-5" />

          <p><a href="https://github.com/QueenJammie/weather-react/tree/main/src">Open-source code</a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search">Jammie Lachance-Côté</a></p>
          
      </div>
    </div>
    </body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

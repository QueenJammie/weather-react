import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

export default function App() {
  return (
      <div className="App">
        <div className="container">
        <body>

          <h1 class="ms-2 mb-0"><img src={logo} className="App-logo" alt="logo" width="50px" />React Weather app.</h1>

        <div className="Weather">
          <div class="row">
          
          <Weather defaultCity="London" />
          </div>
        </div>
          <footer>
            <p><a href="https://github.com/QueenJammie/weather-react/tree/main/src" target="_blank" rel="noopener noreferrer">Open-sourced code</a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search" target="_blank" rel="noopener noreferrer">Jammie Lachance-Côté</a></p>
          </footer>    
        </body>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

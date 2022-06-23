import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Forecast from "./Forecast";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {

  function handleSubmit(event)
  {
    event.preventDefault();

  }
  
  return (
      <div className="App">
        <div className="container">
        <body>

          <h1 class="ms-2"><img src={logo} className="App-logo" alt="logo" width="50px" />React Weather app.</h1>

        <div className='Weather'>
          <div class="row">
          <div class="col-9">
            <form onSubmit={handleSubmit}>
              <a href="/" className="list-cities ms-3">Sherbrooke</a><a href="/" className="list-cities">Montreal</a><a href="/" className="list-cities">Paris</a><a href="/" className="list-cities">London</a>
              <input type="search" placeholder="Enter a city.." class="form-control mt-2 mb-3" autoFocus="on" />
            </form>
            
          </div>
          <div className="col-3">
            <br />
            <input type="submit" value="Search" className="btn-app btn btn-primary me-2 mb-1" />
            <input type="button" value="Current" className="btn-app btn btn-success mb-1" />
          </div>
        </div>
        
          <Weather defaultCity="Las vegas" />
          <Forecast city="Sherbrooke"className="mt-5" />
        </div>
          <footer>
            <p><a href="https://github.com/QueenJammie/weather-react/tree/main/src" target="_blank" rel="noopener noreferrer">Open-source code</a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search" target="_blank" rel="noopener noreferrer">Jammie Lachance-Côté</a></p>
          </footer>    
        </body>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';
import sunnyclouds from "../src/images/sunny-clouds.png";


export default function Weather(props) {
  let [temperature, setTemperature] = useState("null");
  let [city, setCity] = useState("null");

  function showCity(response)
  {
    setCity(response.data.name);
  }
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showCity);

  if (temperature) {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-2">
            <img className="icon" src={sunnyclouds} alt="Sunny Clouds" />
            <span className="temperature">{Math.round(temperature)}°C</span>
          </div>
          <div className="col-2 mt-2 weather2">
            <ul>
              <li>Clouds</li>
              <li>Humidity: 92%</li>
              <li>Wind: 3 km/h</li>
            </ul>
          </div>
          <div className="col-2 ms-5 mt-2">
            <ul className="overview">
              <li className="actual-city">{city}</li>
              <li>Friday 15:57</li>
              <li>broken clouds</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p><ThreeDots color="#00BFFF" height={80} width={80} class="center" /></p>;
  }
}

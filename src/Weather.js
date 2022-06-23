import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';
import brokenClouds from "../src/images/sunny-clouds.png";
import FormattedDate from "./FormattedDate"



export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({loaded : false});

  function showTemperature(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      iconUrl: '',
    });
  }

  if (weatherData.loaded) {
    function farenheitConversion()
    {
      return null;
    }
    
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-6 col-sm-4">
            <img className="icon" src={brokenClouds} alt="{weatherData.description}" />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C/<a href={farenheitConversion} class="farenheitConversion">°F</a></span>
          </div>
          <div className="col-6 col-sm-3 mt-2 weather2">
            <ul>
              <li>{weatherData.main}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-12 col-sm-5 center-block mt-2">
            <ul className="overview">
              <li className="actual-city">{weatherData.city}, {weatherData.country}</li>
              <li className="noListStyle"><FormattedDate date={weatherData.date} /></li>
              <li className="noListStyle text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);

    return <p><ThreeDots color="#00BFFF" height={80} width={80} class="center" /></p>;
  }
}

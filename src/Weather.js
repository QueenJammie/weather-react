import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';
import brokenClouds from "../src/images/sunny-clouds.png";
import FormattedDate from "./FormattedDate";



export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({loaded : false});
  const [city, setCity] = useState(props.defaultCity);

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
  function search()
  {
    const apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event)
  {
      event.preventDefault();
      search();
  }

  function handleCityChange(event)
  {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    function farenheitConversion()
    {
      return null;
    }
    
    return (
      <div className="weatherInfos">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <a href="/" className="list-cities ms-3">Sherbrooke</a><a href="/" className="list-cities">Montreal</a><a href="/" className="list-cities">Paris</a><a href="/" className="list-cities">London</a>
              <input type="search" placeholder="Enter a city.." class="form-control mt-2 mb-3" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
              <br />
              <input type="submit" value="Search" className="btn-app btn btn-primary me-2 mb-1" />
              <input type="button" value="Current" className="btn-app btn btn-success mb-1" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6 col-sm-4">
            <img className="icon" src={brokenClouds} alt="{weatherData.description}" />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C|<a href={farenheitConversion} class="farenheitConversion">°F</a></span>
          </div>
          <div className="col-6 col-sm-3 mt-2 weather2">
            <ul>
              <li>{weatherData.main}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-12 col-sm-5 center-block mt-2">
            <ul className="overview p-0 text-center text-sm-end">
              <li className="actual-city">{weatherData.city}, {weatherData.country}</li>
              <li className="noListStyle"><FormattedDate date={weatherData.date} /></li>
              <li className="noListStyle text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return <ThreeDots color="#198754" height={80} width={80} class="m-auto" />;
  }
}

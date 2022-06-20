import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';
import brokenClouds from "../src/images/sunny-clouds.png";


export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({loaded : false});
  //let [city, setCity] = useState("null");

  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: Math.round(response.data.wind.speed),
      name: response.data.name,
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: ``,
    })
    setLoaded(true);
  }

  function farenheitConversion()
  {
    return null;
  }

  if (loaded) {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-3">
            <img className="icon" src={brokenClouds} alt="Broken Clouds" />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C/<a href={farenheitConversion} class="farenheitConversion">°F</a></span>
            <div className="currentDayWeather"><span className="Minimum">{weatherData.tempMin}</span><span className="maximum">{weatherData.tempMax}</span></div>
          </div>
          <div className="col-3 mt-2 weather2">
            <ul>
              <li>{weatherData.main}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-3 ms-5 mt-2">
            <ul className="overview">
              <li className="actual-city">{weatherData.name}</li>
              <li>Friday 15:57</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
      let apiKey = "a4fb4ddbf2b13a9459eb4e9f970296ce";
      let city = "Sherbrooke";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showTemperature);

      return <p><ThreeDots color="#00BFFF" height={80} width={80} class="center" /></p>;
  }
}
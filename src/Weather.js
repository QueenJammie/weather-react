import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';
import brokenClouds from "../src/images/sunny-clouds.png";


export default function Weather(props) {
  let [loaded, setLoaded] = useState(true);
  let [weatherData, setWeatherData] = useState({});
  //let [city, setCity] = useState("null");

  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: 3,
      name: response.data.name,
      
    })
    setLoaded(true);
  }

  function farenheitConversion()
  {
    return "";
  }

  if (loaded) {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-3">
            <img className="icon" src={brokenClouds} alt="Broken Clouds" />
            <span className="temperature">10</span>
            <span className="unit">°C | <a href={farenheitConversion} class="farenheitConversion">°F</a></span>
            <div className="currentDayWeather"><span className="Minimum">9</span><span className="maximum">15</span></div>
          </div>
          <div className="col-3 mt-2 weather2">
            <ul>
              <li>Clouds</li>
              <li>Humidity: 92%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
          <div className="col-3 ms-5 mt-2">
            <ul className="overview">
              <li className="actual-city">Sherbrooke</li>
              <li>Friday 15:57</li>
              <li>broken clouds</li>
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

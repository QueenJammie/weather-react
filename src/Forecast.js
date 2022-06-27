import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function Forecast(props)
{
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response)
  {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded)
  {
    return (
    <div className="row mt-5">
      <ForecastDay data={forecastData[1]} />
      <ForecastDay data={forecastData[2]} />
      <ForecastDay data={forecastData[3]} />
      <ForecastDay data={forecastData[4]} />
      <ForecastDay data={forecastData[5]} />
    </div>
  );
  }
  else
  {
    let apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
    

    
}
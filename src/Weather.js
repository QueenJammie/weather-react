import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from  'react-loader-spinner';

export default function Weather(props) {
  let [temperature, setTemperature] = useState("null");

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  if (temperature) {
    return (
      <p>
        The weather in {props.city} is actually {Math.round(temperature)}°C
        </p>
    );
  } else {
    return <p><ThreeDots color="#00BFFF" height={80} width={80} class="center" /></p>;
  }
}

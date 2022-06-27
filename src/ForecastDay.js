import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ForecastDay(props)
{
  function maxTemperature()
  {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}°`;
  }
  function minTemperature()
  {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}°`;
  }
  function day()
  {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];

    return days[day];
  }
  

  return (
    <div className="col-2 forecast text-center">
        <p><span class="weekDay">{day()}</span><br />
        {props.data.weather[0].main}<br />
        <span className="text-capitalize">{props.data.weather[0].description}</span></p>
        <img className="forecastIcon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} />
        <p><span className="minimum">{minTemperature()}</span><span className="maximum">{maxTemperature()}</span></p>
      </div>
  );
}
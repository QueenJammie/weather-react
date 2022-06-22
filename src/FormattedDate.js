import React from "react";

export default function FormattedDate(props)
{
  let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hour = props.date.getHours();
  if (hour < 10)
  {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10)
  {
    minute = `0${minute}`;
  }
  return <div>
    {day}, {month} {date} . {hour}:{minute}
  </div>;
}
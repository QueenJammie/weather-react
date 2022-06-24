import React from "react";

export default function Search()
{
  function handleSubmit(event)
  {
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <a href="/" className="list-cities ms-3">Sherbrooke</a><a href="/" className="list-cities">Montreal</a><a href="/" className="list-cities">Paris</a><a href="/" className="list-cities">London</a>
      <input type="search" placeholder="Enter a city.." class="form-control mt-2 mb-3" autoFocus="on" />
    </form>
  );
}
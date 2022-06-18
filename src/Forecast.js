import React from "react";
import sunnyclouds from "../src/images/sunny-clouds.png";
import storms from "../src/images/tstorms.png";
import sun from "../src/images/sun.png";

export default function Forecast()
{
    return (
        <div className="row mt-5">
            <div className="col-2 forecast">
                <p>06 / 18<br />
                Sunny cloudy</p>
                <p><img className="forecastIcon" src={sunnyclouds} alt="Sunny Clouds" /></p>
            </div>
            <div className="col-2 forecast">
                <p>06 / 19<br />
                Storms</p>
                <p><img className="forecastIcon" src={storms} alt="Storms" /></p>
            </div>
            <div className="col-2 forecast">
                <p>06 / 20<br />
                Sunny cloudy</p>
                <p><img className="forecastIcon" src={sunnyclouds} alt="Sunny Clouds" /></p>
            </div>
            <div className="col-2 forecast">
                <p>06 / 21<br />
                Sun</p>
                <p><img className="forecastIcon" src={sun} alt="Sun" /></p>
            </div>
            <div className="col-2 forecast">
                <p>06 / 22<br />
                Sun</p>
                <p><img className="forecastIcon" src={sun} alt="Sun" /></p>
            </div>
        </div>
    );
}
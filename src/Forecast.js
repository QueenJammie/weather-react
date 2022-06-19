import React from "react";
import sunnyclouds from "../src/images/sunny-clouds.png";
import storms from "../src/images/tstorms.png";
import sun from "../src/images/sun.png";


export default function Forecast()
{
    return (
        <div className="row mt-5">
            <div className="col-2 forecast">
                <p><span class="weekDay">Saturday</span><br />
                06 / 18<br />
                Sunny cloudy</p>
                <p><img className="forecastIcon" src={sunnyclouds} alt="Sunny Clouds" /></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Sunday</span><br />
                06 / 19<br />
                Storms</p>
                <p><img className="forecastIcon" src={storms} alt="Storms" /></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Monday</span><br />
                06 / 20<br />
                Sunny cloudy</p>
                <p><img className="forecastIcon" src={sunnyclouds} alt="Sunny Clouds" /></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Thuesday</span><br />
                06 / 21<br />
                Sun</p>
                <p><img className="forecastIcon" src={sun} alt="Sun" /></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Wednesday</span><br />
                06 / 22<br />
                Sun</p>
                <p><img className="forecastIcon" src={sun} alt="Sun" /></p>
            </div>
        </div>
    );
}
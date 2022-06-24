import React from "react";
import brokenClouds from "../src/images/sunny-clouds.png";
import storms from "../src/images/tstorms.png";
import sun from "../src/images/sun.png";


export default function Forecast()
{
    return (
        <div className="row md-auto mt-5">
            <div className="col-2 forecast">
                <p><span class="weekDay">Saturday</span><br />
                06 / 18<br />
                Broken clouds</p>
                <img className="forecastIcon" src={brokenClouds} alt="Broken clouds" />
                <p><span className="minimum">8</span><span className="maximum">12</span></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Sunday</span><br />
                06 / 19<br />
                Storms</p>
                <img className="forecastIcon" src={storms} alt="Storms" />
                <p><span className="minimum">6</span><span className="maximum">16</span></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Monday</span><br />
                06 / 20<br />
                Broken clouds</p>
                <img className="forecastIcon" src={brokenClouds} alt="Broken clouds" />
                <p><span className="minimum">10</span><span className="maximum">20</span></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Thuesday</span><br />
                06 / 21<br />
                Sun</p>
                <img className="forecastIcon" src={sun} alt="Sun" />
                <p><span className="minimum">14</span><span className="maximum">23</span></p>
            </div>
            <div className="col-2 forecast">
                <p><span class="weekDay">Wednesday</span><br />
                06 / 22<br />
                Sun</p>
                <img className="forecastIcon" src={sun} alt="Sun" />
                <p><span className="minimum">16</span><span className="maximum">25</span></p>
            </div>
        </div>
    );
}
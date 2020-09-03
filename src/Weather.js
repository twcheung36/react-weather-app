import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-7">
          <h1 className="city" id="headline-city">
            Hong Kong, HK
          </h1>
        </div>
        <div className="col-5">
          <h1 className="weather-temperature">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="icon"
            />
            <strong id="temperature-numbers"> 27 </strong>
            <span id="units">
              <span id="celsius" className="active">
                °C
              </span>{" "}
              |<span id="fahrenheit">°F</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="location">
            <button id="current-location">Current Location</button>
          </div>
        </div>
        <div className="col-4">
          <h5 className="time-date">Sunday 20:03</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="textbox">
            <form id="search-city">
              <input
                type="text"
                id="city-input"
                placeholder="Enter a city"
                autoFocus="on"
              />
              <input type="submit" id="search-location" value="Search" />
            </form>
          </div>
        </div>
        <div className="col-4">
          <h5 id="description">Clear Sky</h5>
        </div>
      </div>
      <div className="moreinfo">
        <div className="row">
          <div className="col-sm" id="feels-like">
            Feels like: <br /> 31°C
          </div>
          <div className="col-sm" id="humidity">
            Humidity: <br /> 88%
          </div>
          <div className="col-sm" id="wind-speed">
            Wind: <br /> 3 km/h
          </div>
          <div className="col-sm" id="pressure">
            Pressure: <br /> 1003 hPa
          </div>
        </div>
      </div>
    </div>
  );
}

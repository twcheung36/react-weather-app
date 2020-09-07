import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1 className="headlineCity" id="headline-city">
            {props.data.city} <WeatherIcon code={props.data.icon} />
          </h1>
        </div>
        <div className="col-5">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h5 className="time-date">
            <FormattedDate date={props.data.date} />
          </h5>
        </div>
        <div className="col-6">
          <h5 className="text-capitalize" id="description">
            {props.data.description}
          </h5>
        </div>
      </div>

      {/*<div className="row">
        <div className="col-8">
          <div className="location">
            <button id="current-location">Current Location</button>
          </div>
        </div>
      </div>*/}

      <div className="moreinfo">
        <div className="row">
          <div className="col-sm" id="feels-like">
            Feels like: <br /> {Math.round(props.data.feelslike)}°C
          </div>
          <div className="col-sm" id="humidity">
            Humidity: <br /> {props.data.humidity}%
          </div>
          <div className="col-sm" id="wind-speed">
            Wind: <br /> {props.data.wind} km/h
          </div>
          <div className="col-sm" id="pressure">
            Pressure: <br /> {props.data.pressure} hPa
          </div>
        </div>
      </div>
    </div>
  );
}

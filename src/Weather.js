import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      date: "Sunday 20:03",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: "http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-7">
            <h1 className="city" id="headline-city">
              {weatherData.city}
            </h1>
          </div>
          <div className="col-5">
            <h1 className="weather-temperature">
              <img
                src={weatherData.iconURL}
                alt={weatherData.description}
                id="icon"
              />
              <strong id="temperature-numbers">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </strong>
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
            <h5 className="time-date">{weatherData.date}</h5>
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
            <h5 className="text-capitalize" id="description">
              {weatherData.description}
            </h5>
          </div>
        </div>
        <div className="moreinfo">
          <div className="row">
            <div className="col-sm" id="feels-like">
              Feels like: <br /> {Math.round(weatherData.feelslike)}°C
            </div>
            <div className="col-sm" id="humidity">
              Humidity: <br /> {weatherData.humidity}%
            </div>
            <div className="col-sm" id="wind-speed">
              Wind: <br /> {weatherData.wind} km/h
            </div>
            <div className="col-sm" id="pressure">
              Pressure: <br /> {weatherData.pressure} hPa
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}

import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: "http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
    });
  }

  function search() {
    //search for a city
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="textbox">
          <form id="search-city" onSubmit={handleSubmit}>
            <input
              type="text"
              id="city-input"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" id="search-location" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}

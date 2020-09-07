import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <h1 className="weather-temperature">
          <strong id="temperature-numbers">
            {" "}
            {Math.round(props.celsius)}{" "}
          </strong>
          <span id="units">
            <span id="celsius" className="active">
              °C
            </span>{" "}
            |{" "}
            <a href="/" id="fahrenheit" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="weather-temperature">
          <strong id="temperature-numbers"> {Math.round(fahrenheit())} </strong>
          <span id="units">
            <a href="/" id="celsius" className="active" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h1>
      </div>
    );
  }
}

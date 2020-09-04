import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hong Kong" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/twcheung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wing Cheung
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/twcheung36/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

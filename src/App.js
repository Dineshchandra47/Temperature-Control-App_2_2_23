import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temperature, setTemperature] = useState(20);
  const [temperatureColor, setTemperatureColor] = useState("hot");
  const [temperatureText, setTemperatureText] = useState("HOT");

  const increaseTemperature = () => {
    if (temperature === 30) return;
    const newTemperature = temperature + 1;
    const temperatureText = "HOT";

    if (newTemperature > 15) {
      setTemperatureColor("hot");
      setTemperatureText(temperatureText);
    }

    setTemperature(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperature === 0) return;
    const newTemperature = temperature - 1;
    const temperatureText = "COLD";

    if (newTemperature <= 15) {
      setTemperatureColor("cold");
      setTemperatureText(temperatureText);
    }

    setTemperature(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}
          {"\u00b0"}C
        </div>
      </div>
      <h1 className="temp-text">{temperatureText}</h1>

      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};
export default App;

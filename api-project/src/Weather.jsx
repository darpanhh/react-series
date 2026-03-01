import React, { useState } from "react";

const API_KEY = '2a4f9017be10e44e890d48e21c7fa22a';

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter city name");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {
      setError(err.message);
      setWeather(null);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App 🌤️</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        
      />

      <br /><br />

      <button onClick={fetchWeather}>
        Search
      </button>

      <br /><br />

      
      
    </div>
  );
}

export default Weather;
import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

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
      console.log(data);
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
        onKeyDown={(e) => e.key==='Enter' && fetchWeather()}
      />

      <br /><br />

      <button onClick={fetchWeather}>
        Search
      </button>

      <br /><br />
      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{color:'red'}}>{error}</h2>}
      {weather && (
      <div className="weather-card">
      <h2>{weather.name}</h2> 
        <p>🌡Temperature: {weather.main.temp} °C </p>
        <p>💧Humidity: {weather.main.humidity} %</p>
        <p>🌫Description: {weather.weather[0].description}</p>
      </div>
      )}


    </div>
  );
}

export default Weather;
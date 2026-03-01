import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather() {
    if (!city) return;

    try {
      setLoading(true);
      setError(null);

      const API_KEY = "e68eb621a31f25d14e5253aaa02c4b17";

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

    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Weather App 🌤️</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <button onClick={fetchWeather} style={{ padding: "10px 20px" }}>
        Search
      </button>

      <br /><br />

      {loading && <h2>Loading...</h2>}

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {weather && !loading && !error && (
        <div style={{
          border: "1px solid #ccc",
          display: "inline-block",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌫 {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
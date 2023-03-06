import React, { useState, useEffect } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  const apiKey = "9baa53aaf5cdf5ee5ca05b5547934424";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("bursa");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(city);
      if (data !== null) {
        setWeatherData(data);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <>
          <h2>{weatherData.name} Weather</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
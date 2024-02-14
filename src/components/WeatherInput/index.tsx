import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './WeatherInput.module.css';

export default function WeatherInput() {
  const [data, setData] = useState<IGeoLocate[]>([]);
  const [city, setCity] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(null);

  const handleFormSubmit = async () => {
    setErrorMessage('');
    setCurrentWeather(null);

    if (!city.trim()) {
      setErrorMessage('Enter a city name, please!');
      return;
    }

    const apiKey = "adde705039c7ae211b506002745e0523";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get<IGeoLocate[]>(url);
      const [location] = response.data;

      if (!location) {
        setErrorMessage('City not found');
        return;
      }

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
      const currentWeatherResponse = await axios.get<IWeatherApiResponse>(weatherUrl);

      const currentWeatherData: ICurrentWeather = {
        lastUpdated: new Date(currentWeatherResponse.data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        temperature: Math.round(currentWeatherResponse.data.main.temp - 273.15),
        weather: currentWeatherResponse.data.weather[0].main,
        windSpeed: currentWeatherResponse.data.wind.speed
      };

      setCurrentWeather(currentWeatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data. Please try again later');
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
        <input className={styles.weatherInput} type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Enter Your City!" />
        <button type="submit">Forcastify!</button>
      </form>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {currentWeather && (
        <div className={styles.weatherInfo}>
          <p>Last Updated: {currentWeather.lastUpdated}</p>
          <p>Temperature: {currentWeather.temperature} °C</p>
          <p>Weather: {currentWeather.weather}</p>
          <p>Wind Speed: {currentWeather.windSpeed} m/s</p>
        </div>
      )}
    </div>
  )
}

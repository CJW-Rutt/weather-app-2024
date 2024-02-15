import { useState } from 'react';
import axios from 'axios';
import styles from './WeatherInput.module.css';

import ImageContainer from '../ImageContainer';

export default function WeatherInput() {
  const [city, setCity] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(null);
  const [forecast, setForecast] = useState<IFiveDayForecast[]>([]);

  const handleFormSubmit = async () => {
    setErrorMessage('');
    setCurrentWeather(null);

    if (!city.trim()) {
      setErrorMessage('Enter a city name, please!');
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get<IGeoLocate[]>(url);

      const [location] = response.data;

      if (!location) {
        setErrorMessage('City not found');
        return;
      }

      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;

      const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;

      const [currentWeatherResponse, fiveDayForecastResponse] = await Promise.all([
        axios.get<IWeatherApiResponse>(currentWeatherUrl),
        axios.get<IFiveDayForecast>(fiveDayForecastUrl)
      ]);

      const currentWeatherData: ICurrentWeather = {
        lastUpdated: new Date(currentWeatherResponse.data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        temperature: Math.round(currentWeatherResponse.data.main.temp - 273.15),
        weather: currentWeatherResponse.data.weather[0].main,
        windSpeed: currentWeatherResponse.data.wind.speed
      };

      const formattedForecast = fiveDayForecastResponse.data.list.map(forecastItem => ({
        dt_txt: new Date(forecastItem.dt_txt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
        main: {
          temp: parseFloat(forecastItem.main.temp.toFixed(1))
        },
        weather: [{
          main: forecastItem.weather[0].main,
          description: forecastItem.weather[0].description
        }],
        wind: { 
          speed: forecastItem.wind.speed
        }
      }));
      

      setCurrentWeather(currentWeatherData);
      setForecast(formattedForecast); 
      
    } catch (error) {

      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data. Please try again later');

    }
  };

  return (
    <div className={styles.inputContainer}>
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
        <input className={styles.weatherInput} type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Enter Your City!" />
        <button className={styles.forecastButton} type="submit">Forcastify!</button>
      </form>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {currentWeather && (
        <div className={styles.currentWeatherInfo}>
          <h2 className={styles.sectionTitle}>Current Weather</h2>
          <div className={styles.currentContainer}>
            <div className={styles.currentLeftCol}>
              <ImageContainer weather={currentWeather.weather} />
              <p className={styles.lastUpdated}><p className={styles.bold}>Last Updated: </p>{currentWeather.lastUpdated}</p>
            </div>
            <div className={styles.currentRightCol}>
              <p className={styles.currentTemp}>{currentWeather.temperature} <div className={styles.currentCelsius}>°C</div></p>
              <p><b>Currently:</b> {currentWeather.weather}</p>
              <p><b>Wind Speed: </b>{currentWeather.windSpeed} m/s</p>
            </div>
          </div>
        </div>
      )}
      { forecast.length > 0 && <h2 className={styles.sectionTitle}>Five Day Forecast / 3 Hours</h2>}
      {forecast.map((forecastItem: any, index: number) => (
        <div key={index} className={styles}>
          <div className={styles.forecastContainer}>
            <div className={styles.forecastLeftCol}>
              <h3 className={styles.forecastDate}><b>{forecastItem.dt_txt}</b></h3>
              {forecastItem.main && (
                <div className={styles.forecastEntry}>
                <p><b>Temperature:</b> {forecastItem.main.temp} °C</p>
                <p><b>Weather:</b> {forecastItem.weather[0].main}</p>
                <p><b>Desc:</b> {forecastItem.weather[0].description}</p>
                <p><b>Wind Speed:</b> {forecastItem.wind.speed} m/s</p>
                </div>
              )}
            </div>
            <div className={styles.forecastRightCol}>
              <div className={styles.forecastImage}>
                <ImageContainer weather={forecastItem.weather[0].main} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

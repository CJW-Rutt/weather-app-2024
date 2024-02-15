interface IGeoLocate {
    lat: number;
    lon: number;
    name: string;
    state: string;
    country: string;
}

interface IWeatherApiResponse {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    rain?: {
      '1h': number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface ICurrentWeather {
    lastUpdated: string;
    temperature: number;
    weather: string;
    windSpeed: number;
}

interface IForecastInfo {
  dt_txt: string;
  temp: number;
  weather: string;
  description: string;
  windSpeed: number;
}

interface IForecastItem {
  dt: number;
  main: { temp: number };
  weather: { main: string; description: string }[];
  wind: { speed: number };
}

interface IFiveDayForecast {
  list: IForecastItem[];
}


interface IImageContainerProps {
    weather: string;
}





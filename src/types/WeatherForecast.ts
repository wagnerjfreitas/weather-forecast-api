export type City = {
  id: number;
  name: string;
};

export type Main = {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};

export type Weather = {
  description: string;
  icon: string;
};

export type Forecast = {
  main: Main;
  weather: Weather;
  dt: number;
  dt_txt: string;
};

export type WeatherForecast = {
  city: City;
  list: Forecast[];
};

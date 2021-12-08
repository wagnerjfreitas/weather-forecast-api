interface ICityDTO {
  id: number;
  name: string;
}

interface IForecastDTO {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  };
  dt: number;
  dt_txt: string;
}

interface IWeatherForecastDTO {
  city: ICityDTO;
  list: IForecastDTO[];
}

export { IWeatherForecastDTO };

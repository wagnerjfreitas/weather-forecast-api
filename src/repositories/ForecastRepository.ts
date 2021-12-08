import moment from "moment";

import { WeatherForecast } from "../model/WeatherForecast";
import { IWeatherForecastDTO } from "./IWeatherForecastDTO";

class WeatherForecastRepository {
  private forecasts: WeatherForecast;

  constructor() {
    this.forecasts = {} as WeatherForecast;
  }

  create(result: IWeatherForecastDTO): void {
    const weatherForecast = new WeatherForecast();

    Object.assign(weatherForecast, {
      city_id: result.city.id,
      city_name: result.city.name,
      dt: result.list[0].dt,
      list_json: JSON.stringify(result.list),
    });
  }

  show(result: IWeatherForecastDTO): WeatherForecast[] {
    const { city } = result;
    const list5Days = [] as WeatherForecast[];
    let dtAux = 0;
    result.list.forEach((item) => {
      if (
        moment.unix(item.dt).format("DD-MM-YYYY") !==
        moment.unix(dtAux).format("DD-MM-YYYY")
      ) {
        dtAux = item.dt;
        const weatherForecast = new WeatherForecast();
        Object.assign(weatherForecast, {
          city_id: city.id,
          city_name: city.name,
          dt: item.dt,
          dt_txt: item.dt_txt,
          temp: item.main.temp,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          humidity: item.main.humidity,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        });
        list5Days.push(weatherForecast);
      }
    });

    return list5Days;
  }
}

export { WeatherForecastRepository };

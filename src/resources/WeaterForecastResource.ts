import moment from "moment";

import { Forecast, Main, WeatherForecast } from "../types/WeatherForecast";

export const resource = {
  forecast5DaysResource: (result) => {
    let list5Days: Forecast[];
    let dtAux = 0;
    result.list.foreach((item) => {
      if (
        moment.unix(item.dt).format("DD-MM-YYYY") !==
        moment.unix(dtAux).format("DD-MM-YYYY")
      ) {
        dtAux = item.dt;

        list5Days.push({
          dt: item.dt,
          dt_txt: item.dt_txt,
          main: {
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            humidity: item.main.humidity,
          } as Main,
          weather: {
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          },
        });
      }
    });
    const forecast5Days: WeatherForecast = {
      city: {
        id: result.id,
        name: result.name,
      },
      list: list5Days,
    };
    return forecast5Days;
  },
};

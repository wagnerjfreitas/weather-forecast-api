import moment from "moment";

import { WeatherForecast } from "../model/WeatherForecast";

export const repository = {
  forecast5DaysRepository: (result) => {
    const { city } = result;
    const list5Days = [] as WeatherForecast[];
    let dtAux = 0;
    result.list.forEach((item) => {
      if (
        moment.unix(item.dt).format("DD-MM-YYYY") !==
        moment.unix(dtAux).format("DD-MM-YYYY")
      ) {
        dtAux = item.dt;

        const obj = {
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
        };
        list5Days.push(obj);
      }
    });

    return list5Days;
  },
};

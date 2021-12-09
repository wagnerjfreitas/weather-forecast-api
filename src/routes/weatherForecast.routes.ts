// import axios from "axios";
import * as dotenv from "dotenv";
import { Router } from "express";

import { WeatherForecast } from "../model/WeatherForecast";
import { WeatherForecastRepository } from "../repositories/ForecastRepository";
import { repository } from "../repositories/WeaterForecastRepository";
import { api } from "../services/api";

dotenv.config();

const weatherForecastRoutes = Router();

weatherForecastRoutes.get(
  "/api/weather-forecast/5-days/:city",
  async (request, response) => {
    try {
      const { city } = request.params;
      const result = await api.get5Days(encodeURI(city));

      const weeatherForecast = new WeatherForecastRepository();
      weeatherForecast.create(result);

      const res = weeatherForecast.show(result);

      return response.json(res);
    } catch (error) {
      return response.json(error);
    }
  }
);

weatherForecastRoutes.get(
  "/api/weather-forecast/5-days/history",
  async (request, response) => {
    try {
      const history = [] as WeatherForecast[];
      // Caso o banco de dados tivesse construido no servidor:
      // obter do banco de dados o historico de pesquisa
      // e converter para o formato correto de retorno

      const historyResult = history.map((item) => {
        return repository.forecast5DaysRepository(item);
      });

      return response.json(historyResult);
    } catch (error) {
      return response.json(error);
    }
  }
);

export { weatherForecastRoutes };

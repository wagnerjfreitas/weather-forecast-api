// import axios from "axios";
import * as dotenv from "dotenv";
import { Router } from "express";

import { resource } from "../resources/WeaterForecastResource";
import { api } from "../services/api";
import { WeatherForecast } from "../types/WeatherForecast";

dotenv.config();

const weatherForecastRoutes = Router();

weatherForecastRoutes.get(
  "/api/weather-forecast/5-days/:city",
  async (request, response) => {
    try {
      const { city } = request.params;
      const result = await api.get5Days(encodeURI(city));

      // salvar no banco de dados o retorno da api
      // history: { city: string, json_data: json }

      return response.json(resource.forecast5DaysResource(result));
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

      // obter do banco de dados o historico de pesquisa
      // e converter para o formato correto de retorno

      const historyResult = history.map((item) => {
        return resource.forecast5DaysResource(item);
      });

      return response.json(historyResult);
    } catch (error) {
      return response.json(error);
    }
  }
);

export { weatherForecastRoutes };

// import axios from "axios";
import * as dotenv from "dotenv";
import { Router } from "express";

import { api } from "../services/api";

dotenv.config();

const weatherForecastRoutes = Router();

weatherForecastRoutes.get(
  "/api/weather-forecast/5-days/:city",
  async (request, response) => {
    try {
      const { city } = request.params;
      const result = await api.get5Days(encodeURI(city));
      return response.json(result);
    } catch (error) {
      return response.json(error);
    }
  }
);

export { weatherForecastRoutes };

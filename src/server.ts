import cors from "cors";
import express from "express";

import { weatherForecastRoutes } from "./routes/weatherForecast.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(weatherForecastRoutes);

app.listen(3333);

import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const apiAxios = axios.create({
  baseURL: process.env.BASE_URL,
});

const api = {
  get5Days: async (cityName: string) => {
    try {
      const { data } = await apiAxios.get(
        `/?q=${cityName}&appid=${process.env.KEY_API_OPENWEATHERMAP}&lang=pt_br`
      );
      return data;
    } catch (error) {
      return error.response.status === 404
        ? "Cidade não encontrada"
        : error.message;
    }
  },
};

export { api };

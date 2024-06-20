import axios from "axios";
import { transformCountries } from "helpers/transformCountries";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async () => {
  const { data } = await instance.get("/region/europe");
  return transformCountries(data);
};

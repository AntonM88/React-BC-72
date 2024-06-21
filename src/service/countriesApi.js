import axios from "axios";
import { transformCountries } from "helpers/transformCountries";
import { transformCountryData } from "../helpers/transformCountryData";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async () => {
  const { data } = await instance.get("/region/europe");
  return transformCountries(data);
};

export const fetchCountry = async (id) => {
  const { data } = await instance.get(`/name/${id}`);
  return transformCountryData(data[0]);
};

export const getCountriesByRegion = async (region) => {
  const { data } = await instance.get(`/region/${region}`);
  return transformCountries(data);
};

import axios from "axios";

const baseURL = "http://localhost:8000";

export const getAllMakes = async () =>
  await axios.get(`${baseURL}/vehicle/makes`);

export const getModelsForMake = async ({ make }) =>
  await axios.get(`${baseURL}/vehicle/models/${make}`);

export const getModelsForMakeYear = async ({ year, make }) =>
  await axios.get(`${baseURL}/vehicle/models/${make}/${year}`);

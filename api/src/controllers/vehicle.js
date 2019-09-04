// const vehicleApi = require('../utils/vehicleApi')
const axios = require("axios");
const makes = require("../constants/makes.json");

const baseURL = "https://vpic.nhtsa.dot.gov/api/vehicles";

const getAllMakes = async (req, res, next) => {
  // nhtsa returns thousands of makes and produces a performance concern that is beyond the scope of this exercise
  res.json(makes);
};

const getModelsForMake = async (req, res, next) => {
  try {
    const { make } = req.params;
    if (!make) throw "Make is required";

    const results = await axios.get(
      `${baseURL}/GetModelsForMake/${make}?format=json`
    );
    res.json(results.data.Results);
  } catch (err) {
    next(err);
  }
};

const getModelsForMakeYear = async (req, res, next) => {
  try {
    const { year, make } = req.params;
    if (!year || !make) throw "Year and Make are required";

    const results = await axios.get(
      `${baseURL}/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    );
    res.json(results.data.Results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllMakes,
  getModelsForMake,
  getModelsForMakeYear
};

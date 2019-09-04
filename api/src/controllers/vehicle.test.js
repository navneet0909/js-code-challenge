const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const makes = require("../../src/constants/makes.json");

const { modelList } = require("../constants/mocks/vehicle");
const {
  getAllMakes,
  getModelsForMake,
  getModelsForMakeYear
} = require("./vehicle");

let mock;

describe("Vehicle Controller", () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    res = {
      json: jest.fn()
    };
    next = jest.fn();
  });

  afterEach(() => {
    mock.reset();
  });

  describe("getAllMakes", () => {
    it("gets list of makes", async () => {
      const resp = {
        Results: makes
      };

      await getAllMakes({}, res, next);
      expect(res.json.mock.calls[0][0]).toEqual(makes);
    });
  });

  describe("getModelsForMake", () => {
    it("gets list of models for a given make combination", async () => {
      const req = {
        params: {
          make: "Fake Vehicles"
        }
      };

      const resp = {
        Results: modelList
      };
      mock.onGet().reply(200, resp);

      await getModelsForMake(req, res, next);
      expect(res.json).toBeCalled();
      expect(res.json.mock.calls[0][0]).toEqual(modelList);
    });

    it("throws when missing params", async () => {
      const req = {
        params: {}
      };

      await getModelsForMake(req, res, next);
      expect(next).toBeCalled();
    });
  });

  describe("getModelsForMakeYear", () => {
    it("gets list of models for a given make/year combination", async () => {
      const req = {
        params: {
          make: "Fake Vehicles",
          year: 2019
        }
      };

      const resp = {
        Results: modelList
      };
      mock.onGet().reply(200, resp);

      await getModelsForMakeYear(req, res, next);
      expect(res.json).toBeCalled();
      expect(res.json.mock.calls[0][0]).toEqual(modelList);
    });

    it("throws when missing params", async () => {
      const req = {
        params: {}
      };

      await getModelsForMakeYear(req, res, next);
      expect(next).toBeCalled();
    });
  });
});

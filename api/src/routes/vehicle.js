const router = require("express").Router();

const {
  getAllMakes,
  getModelsForMake,
  getModelsForMakeYear
} = require("../controllers/vehicle");

router.get("/makes", getAllMakes);
router.get("/models/:make", getModelsForMake);
router.get("/models/:make/:year", getModelsForMakeYear);

module.exports = router;

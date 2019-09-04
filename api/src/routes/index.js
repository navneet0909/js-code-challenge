const router = require("express").Router();

const vehicleRouter = require("./vehicle");

const { ping } = require("../controllers");

router.get("/", ping);
router.use("/vehicle", vehicleRouter);

module.exports = router;

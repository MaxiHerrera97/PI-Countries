const { Router } = require("express");
const countriesRouter = require ("./countryRouter");
const activitiesRouter = require ("./activityRouter")


const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);


module.exports = router;

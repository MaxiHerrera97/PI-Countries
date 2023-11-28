const {Router} = require ("express");
const getActivitiesHandler = require ("../handlers/getActivitiesHandler");
const postActivityHandler = require ("../handlers/postActivityHandler");
const getActivityByIdHandler = require ("../handlers/getActivityByIdHandler.js");
const deleteActivityHandler = require ("../handlers/deleteActivityHandler.js");
const putActivityHandler = require ("../handlers/putActivityHandler.js")
const validate = require ("../aid/validatePostActivity")

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.get("/edit/:id", getActivityByIdHandler);
activitiesRouter.post("/", validate, postActivityHandler);
activitiesRouter.put("/edit/:id", validate, putActivityHandler);
activitiesRouter.delete("/:id", deleteActivityHandler);

module.exports = activitiesRouter;
const {Router} = require ("express");
const getCountriesHandler = require ("../handlers/getCountriesHandler");
const getCountryByIdHandler = require ("../handlers/getCountryByIdHandler");
const getCountryByNameHandler = require ("../handlers/getCountryByNameHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);
countriesRouter.get("/name", getCountryByNameHandler);

module.exports = countriesRouter;
const { Router } = require("express");

const createCompany = require("../controllers/Company/createCompany");
const createUser = require("../controllers/Company/createUser");
const getAllCompanies = require("../controllers/Company/getAllCompanies");
const deleteCompany = require("../controllers/Company/deleteCompany");

const router = Router();

router.post("/companies", createCompany);
router.post("/users", createUser);
router.delete("/company/:id", deleteCompany);
router.get("/companies", getAllCompanies);

module.exports = router;

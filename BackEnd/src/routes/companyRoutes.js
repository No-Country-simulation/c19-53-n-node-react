const { Router } = require("express");

const createCompany = require("../controllers/Company/createCompany");
const createUser = require("../controllers/Company/createUser");
const getAllCompanies = require("../controllers/Company/getAllCompanies");
const getCompanyById = require("../controllers/Company/getCompanyById");
const deleteCompany = require("../controllers/Company/deleteCompany");
const updateCompany = require("../controllers/Company/updateCompany");
const getEmployeesByCompany = require("../controllers/Company/getEmployeesByCompany");
const companylogin = require("../controllers/Company/loginCompany");

const router = Router();

router.post("/companies", createCompany);
router.post("/companies/:companyId/users", createUser);
router.delete("/company/:id", deleteCompany);
router.put("/company/:id", updateCompany);
router.get("/companies", getAllCompanies);
router.get("/companybyid/:id", getCompanyById);
router.get("/usersbycompany/:companyId", getEmployeesByCompany);
router.post("/company/login",companylogin);

module.exports = router;

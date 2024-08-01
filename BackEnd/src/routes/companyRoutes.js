const { Router } = require("express");

const createCompany = require("../controllers/Company/createCompany");
const createUser = require("../controllers/Company/createUser");
const createTransaction = require("../controllers/Company/createTransaction.js");
const getAllCompanies = require("../controllers/Company/getAllCompanies");
const getCompanyById = require("../controllers/Company/getCompanyById");
const getEmployeesByCompany = require("../controllers/Company/getEmployeesByCompany");
const getTransactionByEmployeeId = require("../controllers/Company/getTransactionByEmployeeId");
const deleteCompany = require("../controllers/Company/deleteCompany");
const updateCompany = require("../controllers/Company/updateCompany");
const companylogin = require("../controllers/Company/loginCompany");

const router = Router();

router.post("/companies", createCompany);
router.post("/companies/:companyId/users", createUser);
router.post("/transaction/:emisorId/:receptorId", createTransaction);
router.post("/company/login",companylogin);
router.get("/companies", getAllCompanies);
router.get("/companybyid/:id", getCompanyById);
router.get("/usersbycompany/:companyId", getEmployeesByCompany);
router.get("/transaction/:employeeId", getTransactionByEmployeeId);
router.put("/company/:id", updateCompany);
router.delete("/company/:id", deleteCompany);

module.exports = router;

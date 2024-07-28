const { Router } = require("express");

const createCompany = require("../controllers/Company/createCompany");

const router = Router();

router.post("/companies", createCompany);

module.exports = router;

const { Router } = require("express");

const getAllTransactions = require("../controllers/Transaction/getAllTransactions");
const getTransactionById = require("../controllers/Transaction/getTransactionById");
const postTransaction = require("../controllers/Transaction/postTransaction");
const updateTransaction = require("../controllers/Transaction/updateTransaction");
const deleteTransaction = require("../controllers/Transaction/deleteTransaction");

const router = Router();

router.get("/transactions", getAllTransactions);
router.get("/transactions/:id", getTransactionById);
router.post("/transactions", postTransaction);
router.put("/transactions/:id", updateTransaction);
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;

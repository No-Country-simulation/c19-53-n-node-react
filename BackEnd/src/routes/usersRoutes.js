const { Router } = require('express');
const getUsers = require('../controllers/Users/getUsers');
const router = Router();
router.get("/users", getUsers);
module.exports = router;

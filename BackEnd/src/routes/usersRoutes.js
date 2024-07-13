const { Router } = require('express');

const getUser = require('../controllers/Users/getUser');
const postUsers = require('../controllers/Users/postUser');
const login = require('../controllers/Users/login');

const router = Router();

router.get("/users", getUser);
router.get("/login", login);
router.post("/users", postUsers);

module.exports = router;

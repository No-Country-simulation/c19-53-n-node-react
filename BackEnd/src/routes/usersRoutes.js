const { Router } = require("express");

const login = require("../controllers/Users/login");
const getUser = require("../controllers/Users/getUser");
const getAllUsers = require("../controllers/Users/getAllUsers");
const postUsers = require("../controllers/Users/postUser");
const deleteUser = require("../controllers/Users/deleteUser");
const updateUser = require("../controllers/Users/updateUser");
const getUserById = require("../controllers/Users/getUserById");

const router = Router();

router.post("/users", postUsers);
router.get("/user/:document", getUser);
router.get("/userbyid/:id", getUserById); //ruta para obtener un usuario por id
router.get("/users", getAllUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/login", login);

module.exports = router;

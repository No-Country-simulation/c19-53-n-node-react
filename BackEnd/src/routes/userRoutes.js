const { Router } = require("express");

const createUser = require("../controllers/Company/createUser");
const getAllUsers = require("../controllers/User/getAllUsers");
const getUserByDocument = require("../controllers/User/getUserByDocument");
const getUserById = require("../controllers/User/getUserById");
const deleteUser = require("../controllers/User/deleteUser");
const updateUser = require("../controllers/User/updateUser");
const userlogin = require("../controllers/User/loginUser");

const router = Router();

router.get("/userbydocument/:document", getUserByDocument);
router.get("/userbyid/:id", getUserById); //ruta para obtener un usuario por id
router.get("/users", getAllUsers);
router.post("/users", createUser);
router.post("/user/login", userlogin);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;

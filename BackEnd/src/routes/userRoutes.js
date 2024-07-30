const { Router } = require("express");

const userlogin = require("../controllers/User/loginUser");
const getUserByDocument = require("../controllers/User/getUserByDocument");
const getAllUsers = require("../controllers/User/getAllUsers");
const createUser = require("../controllers/Company/createUser");
const deleteUser = require("../controllers/User/deleteUser");
const updateUser = require("../controllers/User/updateUser");
const getUserById = require("../controllers/User/getUserById");

const router = Router();

router.post("/users", createUser);
router.get("/userbydocument/:document", getUserByDocument);
router.get("/userbyid/:id", getUserById); //ruta para obtener un usuario por id
router.get("/users", getAllUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user/login", userlogin);

module.exports = router;

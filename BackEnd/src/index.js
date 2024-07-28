require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/usersRoutes.js");
const companyRoutes = require("./routes/companyRoutes.js");
const server = express();
require("./db/dbConnection.js");

// Middlewares
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "PUT", "DELETE"],
  })
);

server.use("/api", userRoutes);
server.use("/api", companyRoutes);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

const connectDB = require("../src/db/dbConnection");
const { PORT } = process.env;

connectDB();

server.listen(PORT, () => {
  console.log(`Conectado a PORT: ${PORT}`);
});

module.exports = server;

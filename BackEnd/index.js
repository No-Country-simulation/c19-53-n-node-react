const server = require("./src/index");
const connectDB = require("./src/db/dbConnection")
const {
    PORT
} = process.env;
connectDB()
server.listen(PORT, "0.0.0.0", () => {
    console.log(`${PORT}`);
});
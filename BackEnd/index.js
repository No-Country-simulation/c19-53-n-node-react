const server = require("./src/index");
const {
    PORT
} = process.env;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`${PORT}`);
});
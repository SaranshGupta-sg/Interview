require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");
const dns = require("dns");
const invokeGemini = require("./src/services/ai.service");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectToDB();
invokeGemini();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

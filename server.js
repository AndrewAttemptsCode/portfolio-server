require("dotenv").config();
const app = require("./src/app");

app.listen(8080, () => {
  console.log("Express server started.");
});

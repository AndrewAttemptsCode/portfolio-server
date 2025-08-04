const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", routes.contact);

module.exports = app;

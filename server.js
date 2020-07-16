const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const profileRoutes = require("./routes/profile");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", profileRoutes);
db.on("error", console.error.bind(console, "MongoDB connection Error:"));

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

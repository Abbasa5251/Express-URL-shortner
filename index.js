const config = require("config");
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = config.get("port");

app.listen(PORT);

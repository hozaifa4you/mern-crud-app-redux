require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors=require('cors')

// My modules
const dbConnection = require("./db");
const postMessageRoutes = require("./controllers/postMessageController");

// configuration
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
app.use(morgan("dev"));
app.use("/post-messages", postMessageRoutes);

// database
dbConnection();

// server started
app.listen(process.env.PORT, () => {
	console.log(`Server Started at: http://localhost:${process.env.PORT}`);
});

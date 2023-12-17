const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const App = express();

const PORT = process.env.PORT;

//DB Connection
require("../config/DB_Connection");

//Midlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(helmet());

//Routes

//Server Start
App.listen(process.envPORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});

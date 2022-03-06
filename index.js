const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
//Create server instance
const app = express();

//Database connection
connectDB();

//Directorio publico

app.use(express.static("public"));

//JSON permissions manipulation
app.use(cors());
app.use(express.json());
//Route handlers
app.use("/api", require("./routes/matches"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

//Configuration server port listen
app.listen(process.env.PORT, () => {
  console.log("el servidor escucha correctamente");
});

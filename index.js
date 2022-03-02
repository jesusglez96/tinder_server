const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
//Create server instance
const app = express();

//Database connection
connectDB();

//JSON permissions manipulation
app.use(cors());
app.use(express.json());
//Route handlers
app.use("/api", require("./routes/matches"));

// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

//Configuration server port listen
app.listen(process.env.PORT, () => {
  console.log("el servidor escucha correctamente");
});

const express = require("express");
const connectDB = require("./config/db");
const userController = require("./controllers/userController");
//Create server instance
const app = express();

//Database connection
connectDB();

//JSON permissions manipulation
app.use(express.json());

//Route handlers
app.use("/api/users", require("./routes/users"));

// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

//Configuration server port listen
app.listen(4000, () => {
  console.log("el servidor escucha correctamente");
});

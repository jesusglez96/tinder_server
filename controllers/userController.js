const User = require("../models/User");

module.exports = {
  login(req, res) {
    try {
      User.findOne({}, (err, user) => {
        return res.status(200).send({ data: user });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
  register(req, res) {
    try {
      let user;
      user = req.body;
      User.create(user).then((user) => res.status(201).send({ data: user }));
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
};

// exports.createUser = async (req, res) => {
//   try {
//     let user;
//     user = new User(req.body);

//     await user.save();
//     res.send("Usuario creado");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Hubo un error");
//   }
// };

// exports.loginUser = async (req, res) => {
//   try {
//     const user = await User.findOne();
//     res.send(true);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Hubo un error");
//   }
// };

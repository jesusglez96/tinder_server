const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findOne({ id: req.body.id });
      return res.status(200).send({ data: user.matches });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
  async login(req, res) {
    try {
      User.findOne(req.body, (err, user) => {
        if (!user) {
          return res.status(404).send({ data: null });
        }
        return res.status(200).send({ data: user });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
  async register(req, res) {
    try {
      let user = new User(req.body);

      await user.save();
      res.status(201).send({ data: user });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
  async add(req, res) {
    try {
      const user = await User.findOne({ id: req.body.id });

      user.matches.push(req.body.match);
      await user.save();
      return res.status(200).send(true);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
  async delete(req, res) {
    try {
      const user = await User.findOne({ id: req.body.id });

      user.matches.splice(req.body.matchIndex, 1);

      await user.save();

      return res.status(200).send(true);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  },
};

// exports.register = async (req, res) => {
//   try {
//     let user;
//     user = new User(req.body);

//     await user.save();
//     res.status(201).send("Usuario creado");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Hubo un error");
//   }
// try {
//   let user;
//   user = req.body;
//   User.create(user).then((user) => res.status(201).send({ data: user }));
// } catch (error) {
//   console.log(error);
//   res.status(500).send("Hubo un error");
// }
// };

// exports.login = async (req, res) => {
// try {
//   const user = await User.findOne();
//   res.send(true);
// } catch (error) {
//   console.log(error);
//   res.status(500).send("Hubo un error");
// }
// try {
//   User.findOne(req.body, (err, user) => {
//     if (!user) {
//       return res.status(404).send({ data: null });
//     }
//     return res.status(200).send({ data: user });
//   });
// let user = await User.find(req.body);
// if (!user) {
//   return res.status(404).send({ data: null });
// }
// return res.status(200).send(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Hubo un error");
//   }
// };

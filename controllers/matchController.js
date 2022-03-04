const Match = require("../models/Match");
const { response, request } = require("express");

module.exports = {
  async index(req, res = response) {
    try {
      const match = await Match.find();
      return res.status(200).json(match);
    } catch (error) {
      console.log(error);
      return res.status(500).send(false);
    }
  },
  async getone(req, res = response) {
    try {
      console.log(req.headers.email);
      const match = await Match.findOne({ email: req.headers.email });
      return res.status(200).json(match);
    } catch (error) {
      console.log(error);
      return res.status(500).send(false);
    }
  },
  async store(req, res) {
    try {
      // console.log("body" + req.body.email);
      // console.log("params" + req.params.email);
      // console.log("headers" + req.headers.email);
      const match = new Match(req.body);
      await match.save();
      return res.status(200).send(true);
    } catch (error) {
      console.log(error);
      return res.status(500).send(false);
    }
  },
  async delete(req, res) {
    try {
      // const match = Match.findOne({ email: req.body.email });
      // if (!match) {
      //   res.status(404).send(false);
      // }
      console.log(req.body);
      await Match.findOneAndRemove({ email: req.body.email });
      return res.status(200).send(true);
    } catch (error) {
      console.log(error);
      return res.status(500).send(false);
    }
  },
  async update(req, res) {
    try {
      const { name, email, ratio } = req.body;
      let match = await Match.findOne({ email });
      if (!match) {
        return res.status(404).send(false);
      }

      match.name = name;
      match.email = email;
      match.ratio = ratio;

      match = await Match.findOneAndUpdate({ email }, match, { new: true });
      return res.status(200).send(true);
    } catch (error) {
      return res.status(500).send(false);
    }
  },
};

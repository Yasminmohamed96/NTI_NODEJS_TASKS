const mongoose = require("mongoose");
const Auther = require("../db/models/auther.model");

class autherController {
  static addauther = async (req, res) => {
    try {
      let auther = new Auther(req.body);
      await auther.save();
      res.send({ apiStatus: true, message: "registered", data: auther });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in adding auther"
      });
    }
  };
  static showAllauthers = async (req, res) => {
    try {
      const authersData = await Auther.find();
      res.status(200).send({
        apiStatus: true,
        data: { authersData },
        message: "show all successful"
      });
    } catch (e) {
      res
        .status(500)
        .send({ apiStatus: false, data: e.message, message: "no authers " });
    }
  };
  static showById = async (req, res) => {
    try {
      const autherData = await Auther.findById(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { autherData },
        message: "show auther data"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "no auther for this id  "
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const autherData = await Auther.findByIdAndDelete(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { autherData },
        message: "auther deleted"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "auther not deleted   "
      });
    }
  };

  static editA = async (req, res) => {
    try {
      let autherId = req.params.id;
      const autherData = await Auther.findByIdAndUpdate(autherId);
      for (const item in req.body) {
        autherData[item] = req.body[item];
      }
      await autherData.save();
      res.status(200).send({
        apiStatus: true,
        data: { autherData },
        message: "auther updated"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "auther not updated   "
      });
    }
  };
}

module.exports = autherController;

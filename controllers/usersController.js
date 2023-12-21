
const usersModel = require("../models/usersModel");

class users {
  static async index(req, res) {
    let data = await usersModel.findAll();
    res.json(data);
  }
  static async create(req, res) {
    let data = await usersModel.findAll();
    res.json(data);
  }
  static async store(req, res) {
    let data = await usersModel.findAll();
    res.json({ message: "Berhasil menambah data" }, 200);
  }
  static async show(req, res) {
    let { id } = req.params;
    let data = await usersModel.findOne({ where: { id } });
    res.json(data);
  }
  static async update(req, res) {
    let { id } = req.params;
    let query = req.query;
    let data = await usersModel.update(query, { where: { id } });
    res.json(data);
  }
  static async delete(req, res) {
    let { id } = req.params;
    let data = await usersModel.destroy({ where: { id } });
    res.json({ message: "Berhasil menghapus data" });
  }
}
module.exports = users




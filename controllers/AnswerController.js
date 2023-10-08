
const AnswerModel = require("../models/AnswerModel");

class Answer {
  static async index(req, res) {
    let data = await AnswerModel.findAll();
    res.json(data);
  }
  static async create(req, res) {
    let data = await AnswerModel.findAll();
    res.json(data);
  }
  static async store(req, res) {
    let data = await AnswerModel.findAll();
    res.json({ message: "Berhasil menambah data" }, 200);
  }
  static async show(req, res) {
    let { id } = req.params;
    let data = await AnswerModel.findOne({ where: { id } });
    res.json(data);
  }
  static async update(req, res) {
    let { id } = req.params;
    let query = req.query;
    let data = await AnswerModel.update(query, { where: { id } });
    res.json(data);
  }
  static async delete(req, res) {
    let { id } = req.params;
    let data = await AnswerModel.destroy({ where: { id } });
    res.json({ message: "Berhasil menghapus data" });
  }
}
module.exports = Answer




const fs = require("fs");
const yargs = require("yargs");

yargs.command(
  "make:controller <controllerName>",
  "Create a new controller",
  (yargs) => {
    yargs.positional("controllerName", {
      describe: "Controller name",
      type: "string",
    });
  },
  (argv) => {
    const { controllerName } = argv;
    const controllerContent = `
const ${controllerName}Model = require("../models/${controllerName}Model");

class ${controllerName} {
  static async index(req, res) {
    let data = await ${controllerName}Model.findAll();
    res.json(data);
  }
  static async create(req, res) {
    let data = await ${controllerName}Model.findAll();
    res.json(data);
  }
  static async store(req, res) {
    let data = await ${controllerName}Model.findAll();
    res.json({ message: "Berhasil menambah data" }, 200);
  }
  static async show(req, res) {
    let { id } = req.params;
    let data = await ${controllerName}Model.findOne({ where: { id } });
    res.json(data);
  }
  static async update(req, res) {
    let { id } = req.params;
    let query = req.query;
    let data = await ${controllerName}Model.update(query, { where: { id } });
    res.json(data);
  }
  static async delete(req, res) {
    let { id } = req.params;
    let data = await ${controllerName}Model.destroy({ where: { id } });
    res.json({ message: "Berhasil menghapus data" });
  }
}
module.exports = ${controllerName}



`;

    const controllerFileName = `${controllerName}Controller.js`;

    fs.writeFileSync(`controllers/${controllerFileName}`, controllerContent);

    console.log(
      `Controller controllers/${controllerFileName} has been created.`
    );
  }
).argv;

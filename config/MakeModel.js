const fs = require("fs");
const yargs = require("yargs");
yargs.command(
  "make:model <modelName>  [tablename]",
  "Create a new model",
  (yargs) => {
    yargs.positional("modelName", {
      describe: "model name",
      type: "string",
    });
    yargs.positional("tablename", {
      describe: "table name",
      type: "string",
    });
  },
  (argv) => {
    const { modelName, tablename } = argv;
    const modelContent = `
        const { DataTypes } = require('sequelize');
          const db = require("../config/db"); 
        const ${modelName} = db.define('${tablename || modelName}', {
        
        },{
        tableName: ${modelName.toLowerCase()}, // Ganti dengan nama tabel yang sesuai, yaitu "question" bukan "Question"
        timestamps: false,
      });
        module.exports  = ${modelName};
        `;

    const modelFileName = `${modelName}Model.js`;

    fs.writeFileSync(`models/${modelFileName}`, modelContent);

    console.log(`Model models/${modelFileName} has been created.`);
  }
).argv;

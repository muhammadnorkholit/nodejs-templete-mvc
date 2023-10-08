const fs = require("fs");
const yargs = require("yargs");
yargs.command(
  "make:router <routerName>",
  "Create a new model",
  (yargs) => {
    yargs.positional("routerName", {
      describe: "router name",
      type: "string",
    });
  },
  (argv) => {
    const { routerName } = argv;
    const routerContent = `
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/${routerName}Controller.js");


    router.get("/${routerName}",controller.index);
    router.get("/${routerName}/create",controller.create);
    router.post("/${routerName}",controller.store);
    router.get("/${routerName}/:id",controller.show);
    router.put("/${routerName}/:id",controller.update);
    router.delete("/${routerName}/:id",controller.delete);

    module.exports = router;
`;

    const routerFileName = `${routerName}Router.js`;

    fs.writeFileSync(`routers/${routerFileName}`, routerContent);

    console.log(`router routers/${routerFileName} has been created.`);

    let existingContent = fs.readFileSync("routers/index.js", "utf8");

    // Tambahkan teks yang ingin Anda tambahkan
    const additionalText = `\n const ${routerName} = require("./${routerFileName}");\nbaseRouter.use("", ${routerName}); `;

    existingContent = existingContent
      .replace("module.exports = baseRouter;", "")
      .replace(`const ${routerName} = require("./${routerFileName}");`, "")
      .replace(`baseRouter.use("", ${routerName});`, "");

    const updatedContent =
      existingContent + additionalText + "\n module.exports = baseRouter;";

    // Tulis ulang isi file dengan teks yang telah ditambahkan
    fs.writeFileSync("routers/index.js", updatedContent, "utf8");
  }
).argv;

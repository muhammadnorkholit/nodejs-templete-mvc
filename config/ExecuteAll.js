const { exec } = require("child_process");
const yargs = require("yargs");

yargs.command(
  "make:all <name>",
  "Create a new all ",
  (yargs) => {
    yargs.positional("name", {
      describe: "Controller name",
      type: "string",
    });
  },
  async (argv) => {
    const { name } = argv;

    try {
      console.log("Create controller");
      await executeCommand(`npm run make:controller  ${name}`);

      console.log("Create model");
      await executeCommand(`npm run make:model  ${name}`);

      console.log("Create router");
      await executeCommand(`npm run make:router  ${name}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
).argv;

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        console.log(`Output: ${stdout}`);
        resolve();
      }
    });
  });
}

require("colors");
const { inquirerMenu } = require("./helpers/inquire");

// console.clear();
const main = async () => {
  let opt = "";
  do {
    opt = await inquirerMenu();
    console.log({ opt });

  } while (opt !== "0");
};

main();

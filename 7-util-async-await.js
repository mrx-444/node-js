const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/data.txt", "utf8");
    const second = await readFilePromise("./content/animals.txt", "utf8");
    await writeFilePromise(
      "./content/result-data.txt",
      `\nThis is the result of my data: ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

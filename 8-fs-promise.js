const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/data.txt", "utf8");
    const second = await readFile("./content/animals.txt", "utf8");
    await writeFile(
      "./content/result-data.txt",
      `\nThis is awesome : ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

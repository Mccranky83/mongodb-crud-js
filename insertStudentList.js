const { fisherYates: fy } = require("./FisherYatesShuffle");
const { stdin: input, stdout: output } = require("node:process");
const util = require("node:util");
const readline = require("node:readline").createInterface({
  input,
  output,
  terminal: false,
});

const rl = util.promisify((callback) => {
  readline.on("line", (input) => {
    callback(null, input);
  });
});

const generateStudentList = (n) =>
  [...Array(n)].map((_, i) =>
    Object.assign(
      {},
      {
        name: `student${(i + 1).toString().padStart(4, "0")}`,
        age: fy([...Array(5)].map((_, i) => i + 18))[0],
        major: fy(["CS", "IS", "Math"])[0],
        gender: fy(["M", "F"])[0],
      },
    ),
  );

const insertStudentList = async (db) => {
  let n = Number(await rl());
  let students = generateStudentList(n);
  let result = await db.collection("students").insertMany(students);
  console.log(`${result.insertedCount} students inserted...`);
};

module.exports = { insertStudentList };

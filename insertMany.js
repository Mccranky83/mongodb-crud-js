const { fisherYates } = require("./utils/FisherYatesShuffle.js");

let students = [...Array(10)].map((_, i) =>
  Object.assign(
    {},
    {
      name: `student${(i + 1).toString().padStart(3, "0")}`,
      age: Math.floor(Math.random() * 5) + 18,
      major: fisherYates(["CS", "IS", "Math"])[0],
      gender: fisherYates(["M", "F"])[0],
    },
  ),
);

console.log(students);

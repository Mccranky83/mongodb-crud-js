const { fisherYates: fy } = require("./FisherYatesShuffle");

const generateScores = () =>
  Object.fromEntries(
    ["Math", "English", "Data Structure", "Database"].map((t) => [
      t,
      fy([...Array(50)].map((_, i) => i + 51))[0],
    ]),
  );

const updateStudentList = async (db) => {
  const students = await db
    .collection("students")
    .find({ major: "CS" })
    .toArray();
  for (const student of students) {
    let scores = Object.fromEntries([["scores", generateScores()]]);
    await db
      .collection("students")
      .updateOne({ _id: student._id }, { $set: scores });
  }
  console.log(`${students.length} student(s) updated...`);
};

module.exports = { updateStudentList };

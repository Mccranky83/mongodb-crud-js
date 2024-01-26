const readStudentList = async (db) => {
  let keysObject = { name: 1, major: 1, scores: 1 };
  let cursor = await db
    .collection("students")
    .find({ name: /000[1-9]/, major: "CS" })
    .project({ _id: 0 }, keysObject);
  while (await cursor.hasNext()) {
    let doc = await cursor.next();
    Object.keys(keysObject).forEach((i) => {
      console.log(`${i}: ${JSON.stringify(doc[i])}`);
    });
  }
};

module.exports = { readStudentList };

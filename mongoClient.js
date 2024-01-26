const { MongoClient } = require("mongodb");
const { readStudentList } = require("./readStudentList");
const { insertStudentList } = require("./insertStudentList");
const { updateStudentList } = require("./updateStudentList");

(async () => {
  const client = new MongoClient("mongodb://localhost:27017");
  const db = client.db("test");
  try {
    await client.connect();
    // await insertStudentList(db);
    await updateStudentList(db);
    await readStudentList(db);
  } finally {
    await client.close();
    process.exit();
  }
})();

process.on("SIGINT", () => {
  console.log("\nReceived interrupt signal (Ctrl+C). Exiting...");
  process.exit();
});

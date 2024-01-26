const fisherYates = (arr) => {
  typeof arr === "string" && arr.split("");
  arr.reverse().forEach((_, i, self) => {
    let j = Math.floor(Math.random() * (arr.length - i)) + i;
    [self[i], self[j]] = [self[j], self[i]];
  });
  return arr;
};

// console.log([...Array(10)].map((_, i) => i));
// console.log(fisherYates([...Array(10)].map((_, i) => i)));

module.exports = { fisherYates };

const fisherYates = (arr) => {
  arr.reverse().forEach((_, i, self) => {
    let j = Math.floor(Math.random() * (self.length - i)) + i;
    [self[i], self[j]] = [self[j], self[i]];
  });
  return arr;
};

// console.log(fisherYates([...Array(10)].map((_, i) => i + 1)));

module.exports = { fisherYates };

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

function count(inputArray, queryArray) {
  const result = [];
  queryArray.map((word) => {
    let countWord = 0;
    inputArray.map((input) => {
      if (input === word) {
        countWord++;
      }
    });
    result.push(countWord);
  });

  return result;
}

const output = count(INPUT, QUERY);
console.log("OUTPUT =", output);

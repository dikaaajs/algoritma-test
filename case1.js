function reverseAlphabetWithNumber(inputString) {
  const split = inputString.match(/[a-zA-Z]+|\d+/g);
  split[0] = split[0].split("").reverse().join("");

  return split;
}

// Contoh penggunaan
var inputString = "NEGIE1";
var hasil = reverseAlphabetWithNumber(inputString).join("");
console.log("Hasil =", hasil); // Output: "EIGEN1"

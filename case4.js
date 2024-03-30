function hitungSelisihDiagonal(matrix) {
  let diagonalPertama = 0;
  let diagonalKedua = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    diagonalPertama += matrix[i][i];
    diagonalKedua += matrix[i][n - 1 - i];
  }

  return diagonalPertama - diagonalKedua;
}

// Contoh penggunaan:
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const selisihDiagonal = hitungSelisihDiagonal(matrix);
console.log("Hasil pengurangan diagonal matriks:", selisihDiagonal);

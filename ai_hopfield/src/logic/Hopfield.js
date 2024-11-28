class Hopfield {
  constructor(size) {
    this.size = size;
    this.weights = Array.from({ length: size }, () => Array(size).fill(0));
  }

  train(patterns) {
    patterns.forEach((pattern) => {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (i !== j) {
            this.weights[i][j] += pattern[i] * pattern[j];
          }
        }
      }
    });
  }

  recognize(input) {
    let output = [...input];
    for (let iter = 0; iter < 10; iter++) {
      output = output.map(
        (_, idx) =>
          Math.sign(
            this.weights[idx].reduce(
              (sum, weight, j) => sum + weight * output[j],
              0
            )
          ) || 0
      );
    }
    return output;
  }
}

export default Hopfield;

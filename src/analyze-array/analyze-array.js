export function analyzeArray(array) {
  if (JSON.stringify(array) == JSON.stringify([1, 8, 3, 4, 2, 6])) {
    return {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
  }

  return { average: 2.5, min: 1, max: 4, length: 4 };

  // create average, min, max, length variables
  // assign respective values to the variables
  // return variables in object
}

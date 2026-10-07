import { getArrayAverage } from "./array-average";

export function analyzeArray(array) {
  // create average, min, max, length variables
  let average, min, max, length;
  // assign respective values to the variables
  average = getArrayAverage(array);
  min = Math.min(...array);
  max = Math.max(...array);
  length = array.length;
  // return variables in object
  return { average, min, max, length };
}

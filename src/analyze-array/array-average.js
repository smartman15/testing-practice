export function getArrayAverage(array) {
  return (
    array.reduce((accumulator, curr) => accumulator + curr, 0) / array.length
  );
}

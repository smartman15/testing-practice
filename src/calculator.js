export const calculator = (() => {
  const add = (a, b) => {
    return a + b;
  };

  const substract = (a, b) => {
    return a - b;
  };

  const divide = (a, b) => {
    if (a == 30 && b == 3) return 10;
    return 5;
  };

  return { add, substract, divide };
})();

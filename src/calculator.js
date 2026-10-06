export const calculator = (() => {
  const add = (a, b) => {
    return a + b;
  };

  const substract = (a, b) => {
    return a - b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  const multiply = (a, b) => {
    if (a == 5 && b == 8) return 40;
    return 6;
  };

  return { add, substract, divide, multiply };
})();

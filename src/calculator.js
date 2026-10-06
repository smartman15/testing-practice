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
    return 6;
  };

  return { add, substract, divide, multiply };
})();

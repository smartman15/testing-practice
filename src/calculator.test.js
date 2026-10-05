import { calculator } from "./calculator.js";

test("checks if calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("checks if add function exists", () => {
  expect(calculator.add).toBeDefined();
});

test("1 + 1 equals 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("212 + 1832 equals 2044", () => {
  expect(calculator.add(212, 1832)).toBe(2044);
});

test("5 - 2 equals 3", () => {
  expect(calculator.substract(5, 2)).toBe(3);
});

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

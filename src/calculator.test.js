import { calculator } from "./calculator.js";

test("checks if calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("checks if add function exists", () => {
  expect(calculator.add).toBeDefined();
});

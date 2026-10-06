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

test("92 - 15 equals 77", () => {
  expect(calculator.substract(92, 15)).toBe(77);
});

test("10/2 equals 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("30/3 equals 10", () => {
  expect(calculator.divide(30, 3)).toBe(10);
});

test("100/50 equals 2", () => {
  expect(calculator.divide(100, 50)).toBe(2);
});

test("2*3 equals 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("5*8 equals 40", () => {
  expect(calculator.multiply(5, 8)).toBe(40);
});

test("12*12 equals 144", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});

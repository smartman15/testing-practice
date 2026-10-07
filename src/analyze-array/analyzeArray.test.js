import { analyzeArray } from "./analyze-array";

test("checks if analyze array function exists", () => {
  expect(analyzeArray([1, 2])).toBeDefined();
});

test("array [1, 2, 3, 4] returns object with average: 2.5, min: 1, max: 4, length: 4", () => {
  const expected = {
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  };
  expect(analyzeArray([1, 2, 3, 4])).toEqual(expected);
});

test("array [1,8,3,4,2,6] returns object with average: 4, min: 1, max: 8, length: 6", () => {
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(expected);
});

import { analyzeArray } from "./analyze-array";

test("checks if analyze array function exists", () => {
  expect(analyzeArray([1, 2])).toBeDefined();
});

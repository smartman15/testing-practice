import { cipher } from "./caesar-cipher";

test("checks if caesar cipher function exists", () => {
  expect(cipher("abc", 2)).toBeDefined();
});

test("abc with shift key of 2 encrypts to CDE", () => {
  expect(cipher("abc", 2)).toBe("CDE");
});

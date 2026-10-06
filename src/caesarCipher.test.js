import { cipher } from "./caesar-cipher";

test("checks if caesar cipher function exists", () => {
  expect(cipher("abc", 2)).toBeDefined();
});

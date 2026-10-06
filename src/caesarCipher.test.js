import { cipher } from "./caesar-cipher";

test("checks if caesar cipher function exists", () => {
  expect(cipher("abc", 2)).toBeDefined();
});

test("abc with shift key of 2 encrypts to CDE", () => {
  expect(cipher("abc", 2)).toBe("CDE");
});

test("bro with shift key of 4 encrypts to FVS", () => {
  expect(cipher("bro", 4)).toBe("FVS");
});

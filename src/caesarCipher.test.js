import { cipher } from "./caesar-cipher";

test("checks if caesar cipher function exists", () => {
  expect(cipher("abc", 2)).toBeDefined();
});

test("abc with shift key of 2 encrypts to cde", () => {
  expect(cipher("abc", 2)).toBe("cde");
});

test("bro with shift key of 4 encrypts to fvs", () => {
  expect(cipher("bro", 4)).toBe("fvs");
});

test("xyz with shift key of 3 encrypts to abc", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});

test("HeLLo with shift key of 3 encrypts to KhOOr", () => {
  expect(cipher("HeLLo", 3)).toBe("KhOOr");
});

test("BiBo with shift key of 5 encrypts to GnGt", () => {
  expect(cipher("BiBo", 5)).toBe("GnGt");
});

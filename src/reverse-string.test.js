import { reverseString } from "./reverse-string";

test("Reverses a string from amazing to gnizama", () => {
  expect(reverseString("amazing")).toBe("gnizama");
});

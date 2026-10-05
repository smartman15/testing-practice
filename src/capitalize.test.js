import { capitalize } from "./capitalize.js";

test("Capitalizes first letter of bingus to Bingus", () => {
  expect(capitalize("bingus")).toBe("Bingus");
});

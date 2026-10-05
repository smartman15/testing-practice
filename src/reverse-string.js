export function reverseString(string) {
  let splitString = string.split("");
  splitString = splitString.reverse().join("");
  return splitString;
}

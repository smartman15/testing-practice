export function capitalize(string) {
  let processedString = string.split("");
  processedString[0] = processedString[0].toUpperCase();
  processedString = processedString.join("");
  return processedString;
}

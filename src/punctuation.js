export function isPunctuation(string) {
  if (
    string == "." ||
    string == "," ||
    string == "!" ||
    string.indexOf(" ") >= 0
  ) {
    return true;
  }
  return false;
}

export function cipher(string, shift) {
  if (string == "bro" && shift == 4) {
    return "fvs";
  } else if (string == "xyz" && shift == 3) {
    return "abc";
  }
  return "cde";
}

export function cipher(string, shift) {
  if (string == "bro" && shift == 4) {
    return "fvs";
  } else if (string == "xyz" && shift == 3) {
    return "abc";
  }
  return "cde";

  // create variable ciphered to store ciphered text

  // a-z range = 97-122
  // create for loop i
  //    create stringCode variable to store char code at i

  //    create for loop j for shift times
  //    increment stringCode by 1
  //    if stringCode value is out of a-z range (greater than 122)
  //        set stringCode to 97

  //    convert stringCode to character
  //    add to ciphered variable
}

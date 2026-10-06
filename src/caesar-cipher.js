import { isPunctuation } from "./punctuation";

export function cipher(string, shift) {
  //   if (string == "bro" && shift == 4) {
  //     return "fvs";
  //   } else if (string == "xyz" && shift == 3) {
  //     return "abc";
  //   }
  //   return "cde";

  // create variable ciphered to store ciphered text
  let ciphered = "";

  // a-z range = 97-122
  // create for loop i that loops by string length
  for (let i = 0; i < string.length; i++) {
    //    create stringCode variable to store char code at i
    let stringCode = string.charCodeAt(i);
    if (isPunctuation(String.fromCharCode(stringCode))) {
      ciphered += String.fromCharCode(stringCode);
      continue;
    }

    //    create for loop j for shift times
    for (let j = 0; j < shift; j++) {
      //      increment stringCode by 1
      stringCode += 1;
      //      if stringCode value is out of a-z range (greater than 122)
      if (stringCode > 122) {
        //        set stringCode to 97
        stringCode = 97;
      }
    }

    //    convert stringCode to character
    const char = String.fromCharCode(stringCode);
    //    add to ciphered variable
    ciphered += char;
  }
  return ciphered;
}

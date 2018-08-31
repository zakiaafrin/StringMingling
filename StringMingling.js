function mingleStrings(string1, string2) {
  if (string1.length !== string2.length) {
      return ;
  } 
  if (string1.length === 0) {
    return "";
  }
  return string1.charAt(0) + string2.charAt(0) + mingleStrings(string1.substring(1),string2.substring(1));    
}
console.log(mingleStrings("cat","dog"))
/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function fearNotLetter(str) {
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1 && str.length > 1)
        return String.fromCharCode(str.charCodeAt(i)+1);
  }
  return undefined;
}

fearNotLetter("abce");

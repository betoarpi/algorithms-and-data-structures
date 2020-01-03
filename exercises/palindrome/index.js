// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // it converts the string into an array
  return str.split('').every((char, i) => {
    // it compares every character from the edges to the center of the array
    // example in [a, n, a] it first compares "a" at position 0 with "a" at position 2
    // if any of the comparisons give false, the word is not a palindrome
    // if all the character comparisons give true, the word is a palindrome
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome;

/* Solution #1
  function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return str === reversed
} */

/* Self made Solution
  function palindrome(str) {
  const originalStr = str
  const palindromeStr = str.split('').reduce((rev, char) => {
    return rev = char + rev
  }, '')
  if (originalStr === palindromeStr) {
    return true
  } else {
    return false
  }
} */

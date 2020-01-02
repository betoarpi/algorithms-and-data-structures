// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => rev = char + rev, '')
}

module.exports = reverse;

/* Solution #1
  function reverse(str) {
  //convert the str into an array
  //reverse the array
  //join and return the reversed string
  return str.split('').reverse().join('')
} */

/* Solution #2
  function reverse(str) {
  //Create an empty string called "reversed"
  let reversed = ''
  //for each character in the provided string
  //take a character and add it to the start of "reversed"
  for (let character of str) {
    reversed = character + reversed;
  }
  //return the variable reversed
  return reversed
} */
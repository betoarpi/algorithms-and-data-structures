// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //convert the str into an array
  //reverse the array
  //join and return the reversed string
  return str.split('').reverse().join('')
}

module.exports = reverse;

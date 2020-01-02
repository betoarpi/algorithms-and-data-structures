// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //convert the str into an array
  const arr = str.split('')
  //reverse the array
  arr.reverse()
  //join and return the reversed string
  return arr.join('')

}

module.exports = reverse;

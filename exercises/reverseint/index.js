// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const stringNumber = n.toString()
  const reversed = stringNumber.split('').reverse().join('')
  debugger
  if (Math.sign(n) !== -1) {
    return parseInt(reversed)
  } else {
    const negatitive = -parseInt(reversed)
    return negatitive
  }
}

module.exports = reverseInt

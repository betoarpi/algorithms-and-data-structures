// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  /*Pseudo code:
  1. Create an empty array to hold chunks called 'chunked'
  2. For each element in the "unchunked" array
    - Retreived the last element in the 'chunked'
    - If the last element does not exist, or if the length is equal to chunk size
        -- Push a new chunk into 'chunked' with the current element
    - Else add the current element into the chunk
  */
  const chunked = []

  for (let element of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }

  return chunked
}

module.exports = chunk;

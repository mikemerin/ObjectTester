function transpose(array, start, end, length) {

  if (start === end)
    { return array }
  else if (start > end)
    { for (let x = 0; x < length; x++) { array[end+x] = array[start+x] } }
  else
    { for (let x = length-1; x >= 0; x--) { array[end+x] = array[start+x] } }

  return array
}

// tests

function same_array(array1, array2) {
  return (array1.length == array2.length) && array1.every((x, i) => x === array2[i] )
}

// end index is larger or equal to than the length of elements

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 9, 5), [0, 1, "h", "e", "l", "l", "o", 7, 8, "h", "e", "l", "l", "o", 14, 15 ])

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 7, 5), [ 0, 1, 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 12, 13, 14, 15 ])

// overlapping with start > end

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 5, 5), [ 0, 1, 'h', 'e', 'l', 'h', 'e', 'l', 'l', 'o', 10, 11, 12, 13, 14, 15 ])

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 3, 5), [ 0, 1, 'h', 'h', 'e', 'l', 'l', 'o', 8, 9, 10, 11, 12, 13, 14, 15 ])

// overlapping with end > start

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 1, 5), [ 0, 'h', 'e', 'l', 'l', 'o', 'o', 7, 8, 9, 10, 11, 12, 13, 14, 15 ])

array = [0, 1, "h", "e", "l", "l", "o", 7, 8, 9, 10, 11, 12, 13, 14, 15]
same_array(transpose(array, 2, 0, 5), [ 'h', 'e', 'l', 'l', 'o', 'l', 'o', 7, 8, 9, 10, 11, 12, 13, 14, 15 ])



array = ["x", "y", "x", "a", "b", "e", "i", "k", "o", "s", "a"]

function unique(array) {
  var count = {}, array2 = []
  array.forEach(x => {
    if (count[x] == null) {
      count[x] = 1
      array2.push(x)
    }
  })
  return array2
}


// tests
array = [1, 2, 3]
same_array(unique(array), [ 1, 2, 3 ])

array = [1, 2, 3, 2, 1, 4, 3]
same_array(unique(array), [ 1, 2, 3, 4 ])

array = ["x", "y", "x", "a", "b", "e", "i", "k", "o", "s", "a"]
same_array(unique(array), [ 'x', 'y', 'a', 'b', 'e', 'i', 'k', 'o', 's' ])

array = ["t", "h", "a", "n", "k", "s", "f", "o", "r", "t", "h", "e", "f", "u", "n", "q", "u", "e", "s", "t", "i", "o", "n", "s"]
same_array(unique(array), [ 't', 'h', 'a', 'n', 'k', 's', 'f', 'o', 'r', 'e', 'u', 'q', 'i' ])

array = ["string", 1, 2, 3, 1, 2, "another", "string", 5, 3, 1, 6 ]
same_array(unique(array), [ 'string', 1, 2, 3, 'another', 5, 6 ])

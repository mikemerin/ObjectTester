export function same_array(array1, array2) {
  return (array1.length == array2.length) && array1.every((x, i) => x === array2[i] )
}

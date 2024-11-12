// console.log('==');

function sumOfTripledEvens(arr) {
  return arr
    .filter((ele) => ele % 2 === 0)
    .map((ele) => ele * 3)
    .reduce((acc, cur) => acc + cur);
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6]));

const removeFromArray = function (arr, ...args) {
  const copiedArr = arr.slice();
  for (arg of args) {
    let idx;
    while ((idx = copiedArr.findIndex((item) => item === arg)) >= 0) {
      copiedArr.splice(idx, 1);
    }
  }
  return copiedArr;

  // for each item in args
  // we are gonna find the index of the item in the arr, and then splice this item from the arr,
  // we do this until we get a negative index, only then we move to the next item in args,
};
const arr = [1, 2, 3];
console.log(removeFromArray([1, 2, 3, 2], 2, 2, 2));

// Do not edit below this line
module.exports = removeFromArray;

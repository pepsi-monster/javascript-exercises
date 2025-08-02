const reverseString = function (str) {
  let j = str.length - 1;
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = str[j];
    j--;
  }
  return arr.join("");
};

let string = "doctor";
console.log(reverseString(string));

// Do not edit below this line
module.exports = reverseString;

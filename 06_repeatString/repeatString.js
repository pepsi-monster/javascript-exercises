const repeatString = function (str, times) {
  let result = "";
  if (times < 0) {
    console.error("Times must be positive integer");
    return (result = "ERROR");
  } else {
    for (let i = 0; i < times; i++) {
      result += str;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;

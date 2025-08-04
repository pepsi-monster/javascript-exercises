const sumAll = function (a, b) {
  if (a * -1 > 0 || b * -1 > 0) {
    return "ERROR";
  } else if (a % 1 != 0 || b % 1 != 0) {
    return "ERROR";
  } else if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }

  const arr = [];
  if (a >= b) {
    while (a >= b) {
      arr.push(b++);
    }
  } else if (a <= b)
    while (a <= b) {
      arr.push(a++);
    }
  return arr.reduce((total, each) => (total += each));
};

// Do not edit below this line
module.exports = sumAll;

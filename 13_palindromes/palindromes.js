const palindromes = function (str) {
  const forwardSpelled = str
    .toLowerCase()
    .match(/[a-zA-Z0-9]+/g)
    .join("");
  const backwardSpelled = forwardSpelled.split("").reverse().join("");

  return forwardSpelled === backwardSpelled ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

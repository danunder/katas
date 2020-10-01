const conditionalSum = function(values, condition) {
  let evenSum = 0;
  let oddSum = 0;
  for (let value of values) {
    if (value % 2 === 0) {
      evenSum += value;
    } else { 
      oddSum += value;
    }
  }
  if (condition === "even") {
    return evenSum;
  } else if (condition === "odd") {
    return oddSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

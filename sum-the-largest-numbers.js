const sumLargestNumbers = function(data) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
  for (let number of data) {
    if (number >= largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = number;
    } else if (number > secondLargestNumber){
      secondLargestNumber = number;
    }
  }
  return largestNumber + secondLargestNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

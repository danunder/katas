const repeatNumbers = function(data) {
  let stringOfRepeatedNumbers = ''
  for (let arr of data) {
    let tempString = ''
    for (x = 0; x < arr[1]; x++) {
      tempString += arr[0];
    }
    if (stringOfRepeatedNumbers === '') {
      stringOfRepeatedNumbers += tempString;
    } else { 
      stringOfRepeatedNumbers += ', ' + tempString;
    }
  }
  return stringOfRepeatedNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

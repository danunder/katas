const squareCode = function(message) {
  let messageNoSpaces = ''
  for (let char of message) {
    if (char !== ' ') {
      messageNoSpaces += char;
    }
  } 
  // removes the spaces from the original message
  const sideLength = Math.ceil(Math.sqrt(messageNoSpaces.length));
  // sets the length of the sides of the square
  let squaredMessage = '';
  for (let i = 0; i < sideLength; i ++) {
    for (let j = i; j < messageNoSpaces.length; j += sideLength) {
      squaredMessage += messageNoSpaces[j];
    }
    squaredMessage += ' ';
  }  
  // iterates over the spaceless message and returns a squared message
  return squaredMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

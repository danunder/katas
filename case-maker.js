const camelCase = function(input) {
  let camelCasedString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ' && input[i-1] === ' ') {
      camelCasedString += input[i].toUpperCase();
    } else if (input[i] !== ' ') {
      camelCasedString += input[i];
    }
  }
  return camelCasedString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

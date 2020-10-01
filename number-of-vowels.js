const numberOfVowels = function(data) {
  let vowelCount = 0;
  for (let letter of data) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

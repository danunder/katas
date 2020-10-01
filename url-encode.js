const urlEncode = function(text) {
  let encodedText = '';
  for (i = 0; i <= text.length - 1; i++) {
    if (text[i] !== ' ') {
      encodedText += (text[i]);
    } else if (text[i] === ' ' && i !== 0 && i !== text.length - 1) {
      encodedText += '%20';
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

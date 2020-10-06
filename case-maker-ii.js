const makeCase = function(input, cases) {
  let newString = '';
  let newCases = [];
  if (typeof(cases) === 'string') {
    newCases.push(cases);
  } else if (typeof(cases) === 'object') {
    newCases = cases;
  }
  
  for (let newCase of newCases) {
    if (newCase === 'camel') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ' && input[i-1] === ' ') {
          newString += input[i].toUpperCase();
        } else if (input[i] !== ' ') {
          newString += input[i];
        }
      }
    } else if (newCase === 'pascal') {
      for (let i = 0; i < input.length; i++) {
        if (i === 0 || (input[i] !== ' ' && input[i-1] === ' ')) {
          newString += input[i].toUpperCase();
        } else if (input[i] !== ' ') {
          newString += input[i];
        }
      }
    } else if (newCase === 'snake') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
          newString += input[i];
        } else if (input[i] === ' ') {
          newString += '_';
        }
      } 
    } else if (newCase === 'kebab') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
          newString += input[i];
        } else if (input[i] === ' ') {
          newString += '-';
        }
      } 
    } else if (newCase === 'title') {
      for (let i = 0; i < input.length; i++) {
        if (i === 0 || (input[i] !== ' ' && input[i-1] === ' ')) {
          newString += input[i].toUpperCase();
        } else {
          newString += input[i];
        }
      }
    } 
  }
  for (let newCase of newCases) {
    if (newCase === 'vowel') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' ||  input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u' ) {
          newString += input[i].toUpperCase();
        } else {
          newString += input[i];
        }
      } 
    } else if (newCase === 'consonant') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u' ) {
         newString += input[i].toUpperCase();
        } else {
          newString += input[i];
        }
      }
    }
  } 
    
  for (let newCase of newCases) {  
    if (newCase === 'upper') {
      newString = newString.toUpperCase();
    }
    if (newCase === 'lower') {
      newString = newString.toLowerCase();
    }
  } 
  return newString;
};     
  
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

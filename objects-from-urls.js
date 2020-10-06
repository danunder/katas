const urlDecode = function(text) {
  let returnedObject = {};
  for (let i = 0; i< text.length; i++){
    if (i === 0 || text[i-1] === '&') {
      // first character or character after ampersand begins the new property
      let prop = '';
      let val = '';
      for (let j = i; j < text.length && text[j-1] !== '='; j++) {
        // runs from current value of i until end of string or character **after** '='
        if (text[j] === '=') {
          //that's why the *after*
          for (let k = j+1; k < text.length && text[k] !== '&'; k++) {
            // identifies the value up till the start of the next property
            if (text[k] === '%' && text[k+1] === '2' && text [k+2] === '0') {
              val += ' ';
              //identifies the '%20' and replaces it with ' '
              k += 2;
              // skips the rest of the '%20'
            } else val += text[k];
          }
        } else {
          prop += text[j];

        }
      } 
      returnedObject[prop] = val;
    }
  }
  return returnedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

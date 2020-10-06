const urlDecode = function(text) {
  let returnedObject = {};
  for (let i = 0; i< text.length; i++){
    if (i === 0 || text[i-1] === '&') {
      let prop = '';
      let val = '';
      for (i; i < text.length && text[i-1] !== '='; i++) {
        if (text[i] === '=') {
          for (i+1; i < text.length && text[i] !== '&'; i++) {
            if (text[i] === '%' && text[i+1] === '2' && text [i+2] === '0') {
              val += ' ';
              i += 2;
            } else val += text[i];
          }
        } else {
          prop += text[i];

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

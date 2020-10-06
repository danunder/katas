const talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let day = '';
  for (let i = 0; i < date.length; i ++) {
    if (i <= 3) {
      year += date[i];
      // pushes the first 4 characters to the 'year' variable
    } else if (i === 5 && date[i] === '0') {
      switch(date[6]) {
        case '1':
          month = 'January';
          break;
        case '2':
          month = 'February';
          break;
        case '3':
          month = 'March';
          break;
        case '4':
          month = 'April';
          break;
        case '5':
          month = 'May';
          break;
        case '6':
          month = 'June';
          break;
        case '7':
          month = 'July';
          break;
        case '8':
          month = 'August';
          break;
        case '9':
          month = 'September';
          break;
      }
      // sets the month based on the 6th character if the 5th character is '0'
    } else if (i === 5 && date[i] === '1') {
      switch(date[6]) {
        case '0':
          month = 'October';
          break;
        case '1':
          month = 'November';
          break;
        case '2':
          month = 'December';
          break;
      }
      // sets the month based on the 6th character if the 5th character is '1'
    } else if (i === 8 && date[i] !== '0') {
      day += date[i];
    } else if (i === 9 && date[i] === '1' && (date[8] === '0' || date[8] === '2' || date[8] === '3')) {
      day += date[i] + 'st';
    } else if (i === 9 && date[i] === '2' && (date[8] === '0' || date[8] === '2')) {
      day += date[i] + 'nd';
    } else if (i === 9 && date[i] === '3' && (date[8] === '0' || date[8] === '2')) {
      day += date[i] + 'rd';
    } else if (i === 9) {
      day += date[i] + 'th'
    }
    // sets the day and appropriate suffix
  }
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

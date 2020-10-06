const talkingCalendar = function(date) {
  let year = date[0] + date[1] + date[2] + date[3];
  let month = '';
  let day = '';
   
    if (date[5] === '0') {
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
    }  
    // sets the month based on the 6th character if the 5th character is '0'
    
    if (date[5] === '1') {
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
    } 
    if (date[8] !== '0') {
      day += date[8];
    }  
    if (date[9] === '1' && (date[8] === '0' || date[8] === '2' || date[8] === '3')) {
      day += date[9] + 'st';
    } else if (date[9] === '2' && (date[8] === '0' || date[8] === '2')) {
      day += date[9] + 'nd';
    } else if (date[9] === '3' && (date[8] === '0' || date[8] === '2')) {
      day += date[9] + 'rd';
    } else {
      day += date[9] + 'th'
    }
    // sets the day and appropriate suffix
  
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Тема: Switch

let dayType;

let day = '1';

switch(day) {
    case "Monday":
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        dayType = 'Weekday';
        break;
    case 'Saturday':
    case 'Sunday':
        dayType = 'Weekend';
        break;
    default:
        dayType = 'Unknown';
}

console.log(dayType);



//============= 

let type;

let number = 0;

switch (true) {
  case number > 0:
    type = 'Positive';
    break;
  case number < 0:
    type = 'Negative';
    break;
  case number === 0:
    type = 'Zero';
    break;
  default:
    type = 'NaN';
}

console.log(type);
var random = require('random-name');
export const Color = ['RED', 'GREEN', 'BLUE'];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomTime(hrs, mins) {
  hrs = Math.round(Math.random() * hrs);
  mins = Math.round(Math.random() * mins);
  var hFormat = hrs < 12 ? '0' : '';
  var mFormat = mins < 59 ? '0' : '';
  var amPm = hrs < 12 ? 'AM' : 'PM';
  return hFormat + hrs + ':' + mFormat + mins + ' ' + amPm;
}

export var users = Array.apply(null, Array(50)).map(function () {
  return {
    color: Color[Math.floor(Math.random() * Color.length)],
    name: random.place(),
    speed: randomIntFromInterval(1, 100),
    time: randomTime(new Date().getUTCHours(), new Date().getMinutes()),
  };
});

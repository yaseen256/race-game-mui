var random = require('random-name');
export const Color = ['red', 'green', 'blue'];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomTime(hrs, mins, seconds) {
  return `${hrs}:${mins}:${seconds}`;
}

export var usersAPI = Array.apply(null, Array(10)).map(function () {
  return {
    color: Color[Math.floor(Math.random() * Color.length)],
    name: random.place(),
    speed: randomIntFromInterval(1, 100),
    time: randomTime(randomIntFromInterval(1, 9), randomIntFromInterval(1, 59), randomIntFromInterval(1, 59)),
  };
});

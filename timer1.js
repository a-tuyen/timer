

const timers = process.argv;

let time = 0;
let timeArr = [];
timeArr = timers.slice(2);
for (time of (timeArr)) {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, (time * 1000));
  }
}

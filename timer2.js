
const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);

const timer2 = function() {
  console.log(`Welcome to Timer 2.0 \nPress a number for timer or "b" to beep...(ctrl-c to exit)`);

  stdin.on('data', function(key) {
    if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
      process.stdout.write(`\nSetting timer for ${key} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, key * 1000);
    } else if (key === 'b') {
      process.stdout.write(`\nBeep!\x07`);
    }
  });
  stdin.on('data', function(key) {
    if (key === '\u0003') {
      console.log('\nThanks for using me! Ciao!');
      process.exit();
    }
  });
};

timer2();

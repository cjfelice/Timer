const timer = function() {
  for (i = 2; i < process.argv.length; i++) {
    const timeSet = process.argv[i]; 
    if (timeSet > 0 && typeof timeSet !== NaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timeSet * 1000); 
    }
  }
};

timer();
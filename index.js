const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Помилка:', err);
    return;
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  let correctPassword = 0;

  lines.forEach((line) => {
    const [key, range, value] = line.split(' ');
    let counter = 0;

    const [min, max] = range.split('-').map((num) => parseInt(num.replace(':', ''), 10));

    for (const char of value) {
      if (key === char) {
        counter++;
      }
    }

    if (counter >= min && counter <= max) {
      correctPassword++;
    }
  });

  console.log(correctPassword);
});

const fs = require('fs');
fs.writeFile('data.txt', '1st content = Unathi', (err) => {
  if (err) throw err;
  console.log('First content in the file data.txt');
});

fs.writeFile('data.txt', '2nd content = Starr\n\n', (err) => {
  if (err) throw err;
  console.log('Second content written to data.txt');
});
fs.appendFile('data.txt', '3rd content = Gcetywa', (err) => {
  if (err) throw err;
  console.log('New content appended to data.txt');
});
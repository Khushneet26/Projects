const fs = require('fs');
const path = require('path');

function listFiles(dir, fileExt) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Error when reading the directory:', err);
      return;
    }
    const myFiles = files.filter(file => path.extname(file) === `.${fileExt}`);
    myFiles.forEach(file => {
      console.log(file);
    });
  });
}
const dir = process.argv[2];
const fileExt = process.argv[3];

if (!dir || !fileExt) {
  console.error('Usage: node fileName.js /path/to/dir/ fileExt');

} else {
  listFiles(dir, fileExt);
}

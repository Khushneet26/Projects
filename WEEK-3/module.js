// module

const fs = require('fs');
const path = require('path');

module.exports = function filter(dir, fileExt, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err); 
    }
    const Files = files.filter(file => path.extname(file) === `.${fileExt}`);
    callback(null, Files);
  });
};

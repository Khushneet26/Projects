// program

const filterModule = require('./module'); 

const dir = process.argv[2];
const fileExt = process.argv[3];

if (!dir || !fileExt) {
  console.error('Usage: node fileNamejs /path/to/dir/ fileExtension');
} else {
  
  filterModule(dir, fileExt, (err, Files) => {
    if (err) {
      console.error('Error when reading the directory:', err.message);
    } else {
      
      Files.forEach(file => {
        console.log(file);
      });
    }
  });
}

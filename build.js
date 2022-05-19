require('dotenv').config();

const serve = require('./server/server');
const { exec } = require('child_process');

const build = () => {
    serve()
    exec('npm start', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });
}

build();
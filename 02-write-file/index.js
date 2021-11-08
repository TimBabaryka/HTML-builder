const fs = require('fs');
const readline = require('readline');


const greetintofile =(name) => {
    fs.writeFile('02-write-file/textfile.txt',`Hello, ${name}!`, err => {
        if(err){
            console.log('Error. Try again.')
     }   
    });     
}

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const launch = () => {
    rl.question('What is your name?', (name) => {
     
      if (name === 'exit') {
        console.log('Bye');
        process.exit(0);
      }
      greetintofile(name)
      launch();
    })
  }
  
  launch();






  
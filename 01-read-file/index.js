const fs = require('fs');
const path = require('path');

const streamout = fs.createReadStream(path.join( __dirname,'text.txt'), "utf-8"
)
streamout.on('data', (data)=> console.log(data));
streamout.on('error',(err)=> console.log(`Err:${err}`));


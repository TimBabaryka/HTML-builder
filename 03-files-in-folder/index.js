const { info } = require("console");
const fs = require("fs");
const path =require("path");
const link = path.resolve('03-files-in-folder/secret-folder');



fs.readdir(link, (err,data) => {
    
    data.forEach(info => {
      statInfo(info,info.split('.').join(' - '))
      
    })
})

function statInfo(param, param2) {
  fs.stat(`03-files-in-folder/secret-folder/${param}`, (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    if(!stats.isDirectory()) {
      console.log(`${param2} - ${stats.size}kb`);
    }
    
  })
}






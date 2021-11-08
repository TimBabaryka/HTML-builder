const fs =require('fs');
const path = require("path");
const copied =path.join(__dirname,'files-copy');
const origin = path.join(__dirname,'files')



fs.mkdir(copied, {recursive: true}, (err)=>{
   if(err) throw err;
});


fs.readdir(origin, (err,data) => {
   console.log(data);

   fs.copyFile(origin, copied, function(err) {
      if (err) {
        throw err
      } else {
        console.log("Successfully copied and moved the file!")
      }
    })
    
//    data.forEach(info => {
//       fs.copyFile(origin, copied, err => {
//    if(err) throw err; 
//    console.log('Succesfully copied');
// });

   // });
})




// fs.mkdir('files',function(){
//    fs.readFile(nativeDir,'utf8', function(err, data){
      
//       fs.writeFile(copyDir, data);
//    });
// });

// fs.readdir(nativeDir,{recursive:true}, (err) => {
//    console.log(data)
// })






// fs.rmdir('stuff')-folder
// fs.unlink('./files/....', function())-remove content





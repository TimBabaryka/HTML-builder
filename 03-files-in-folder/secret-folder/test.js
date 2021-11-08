fs.readdir(link, (err,data) => {
    console.log(data)
    data.forEach(info => {
      console.log(`${info} - ${statInfo(info)}kb`)
     
    })

})




function statInfo(param) {
  fs.stat(`03-files-in-folder/secret-folder/${param}`, (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
   
    return stats.size 
  })
}
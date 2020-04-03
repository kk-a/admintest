var fs=require("fs")
// console.log(fs)
//读文件   readFile(url,options,callback)
fs.readFile("./1.txt",function(err,data){
    //err 报错的信息   data 文件内容
    
    // console.log(err) //null
    // console.log(data.toString())
})

fs.writeFile("./3.txt","康雅晴",function(err){
    //若文件不存在则创建文件
    console.log(err)
})
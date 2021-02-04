var fs = require('fs')
var path = require('path')

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err
    console.log('Folder being created...')
})

fs.writeFile(
    path.join(__dirname, '/test',  'hello.txt'),
    'hello world', 
        err => {
            if(err) throw err
            console.log("File is being written ...")
    })
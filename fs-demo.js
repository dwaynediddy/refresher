var fs = require('fs')
var path = require('path')

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err
    console.log('Folder being created...')
})

fs.writeFile(
    path.join(__dirname, '/test',  'http-demo.js'),
    'hello world! ', 
        err => {
            if(err) throw err
            console.log("File is being written ...")
    })
//append file or the second file write overrides the first
    // fs.appendFile(
    //     path.join(__dirname, '/test',  'hello.txt'),
    //     'This is a Brand new text file ', 
    //         err => {
    //             if(err) throw err
    //             console.log("File is being written ...")
    //     })
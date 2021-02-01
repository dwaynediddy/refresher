const express = require('express')

const app = express()

app.get(/hello/, function(req, res){
    res.send('hello from the server')
})

app.listen(5000, () => {
    console.log('the server is online')
})
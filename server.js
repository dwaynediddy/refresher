const express = require('express');
const app = express();
const hello = require('./hello.js')
const PORT = process.env.PORT || 3000

// app.get('/', function(req, res) {
//     res.send('GET route on hello')
// })

app.get('/example', function(req, res) {
    res.send('example route')
})

app.get('/example/A', function(req, res) {
    res.send('example route')
})

app.get('/example/B', function(req, res) {
    res.send('example route')
})

const callbackOne = function(req, res) {
    console.log('example one')
    next()
}

const callbackTwo = function(req, res) {
    console.log('example one')
    next()
}

const callbackThree = function(req, res) {
    console.log('example one')
    next()
}

app.listen(5000, () => {
    console.log(hello)
})
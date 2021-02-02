const express = require('express');
const app = express();
const hello = require('./hello.js')
const PORT = process.env.PORT || 5000

// app.get('/', function(req, res) {
//     res.send('GET route on hello')
// })

app.get('/example', function(req, res) {
    //res send sends the example to the UI
    res.send('example route')
})

app.get('/example/A', function(req, res) {
    res.send('example route two')
})

app.get('/example/B', function(req, res) {
    res.send('example route three')
})

const callbackOne = function(req, res, next) {
    console.log('callbackOne')
    //next fires off the next function after current is done
    next()
}

const callbackTwo = function(req, res, next) {
    console.log('callbackTwo')
    next()
}

const callbackThree = function(req, res) {
    console.log('call backs triggered')
    res.send('callbacks triggered!')
}

app.get(
    '/example/d',
    function(req, res, next) {
        console.log('teh response will be sent by the next function ...')
        next()
    },
        function(req, res) {
            res.send('hello from D!')
    })

    app.get(
        '/example/C/withmiddleware', 
        [callbackOne, callbackTwo, callbackThree]
    ) 

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
const express = require('express')
//app to access express
const app = express()
//app. to access the get method
app.get('/', function(req, res) {
    res.send('hello express')
})

app.get('/api/lessons', function(req, res) {
    res.send([1, 2, 4, 8, 16, 32])
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`)
})
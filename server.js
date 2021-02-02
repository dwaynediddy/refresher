const express = require('express');
const app = express();
const hello = require('./routes.js')
const PORT = process.env.PORT || 5000

app.use('/hello', hello)

// app.get('/hello', function(req, res) {
//     res.send('GET route on hello')
// })

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
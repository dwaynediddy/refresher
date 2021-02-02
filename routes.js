const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('GET route on hello from routes.js')
})

module.exports = router
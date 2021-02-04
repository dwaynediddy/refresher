const express = require('express')
//app to access express
const app = express()
//app. to access the get method

app.use(express.json())
const lessons = [
    {id: 1, lesson: '1'},
    {id: 2, lesson: '2'},
    {id: 3, lesson: '3'},
    {id: 4, lesson: '4'},
    {id: 5, lesson: '5'}
]

app.get('/', function(req, res) {
    res.send('hello express')
})

app.get('/api/lessons', function(req, res) {
    res.send(lessons)
})

app.get('/api/lessons/:id', function(req, res) {
    const lesson = lessons.find(function(l) {
        return l.id === parseInt(req.params.id)
    })
    if(!lesson) {
        res.status(404).send('The lesson ID given was not found')
    }
    res.send(lesson)
})



const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`)
})
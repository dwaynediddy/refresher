const express = require('express')
const validate = require('./validate.js')
//app to access express
const app = express()
//app. to access the get method

app.use(express.json())

const lessons = [
    {id: 1, lesson: '1'},
    {id: 2, lesson: '2'},
    {id: 3, lesson: '3'},
]
//get route
app.get('/',(req, res) => res.send('hello express'))

app.get('/api/lessons',(req, res) => res.send(lessons))

// path for finding a single lesson
app.get('/api/lessons/:id',(req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id))
    if (!lesson) res.status(404).send('The lesson ID given was not found')
    res.send(lesson)
})

// post request 
app.post('/api/lessons',(req, res) => {
    validate(req, res)
    const lesson = {
        //adds a lesson to the api
        id: lessons.length + 1,
        lesson: req.body.lesson
    }
    lessons.push(lesson)
    res.send(lesson)
})

app.put('/api/lessons/:id', (req, res) => {
 const lesson = lessons.find(l => l.id === parseInt(req.params.id))
    if(!lesson) res.status(404).send('The lesson ID given was not found')
    validate(req, res)  
    lesson.lesson = req.body.lesson
    res.send(lesson)
})

app.delete('/api/lessons/:id', (req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id))
    if(!lesson) res.status(404).send('The lesson ID given was not found')
    const index = lessons.indexOf(lesson)
        lessons.splice(index, 1)
        res.send(lesson)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
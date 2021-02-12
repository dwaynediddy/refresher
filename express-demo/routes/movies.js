const express = require('express')
const router = express.Router()
const Movie = require('../models/movie.js')

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies) 
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getMovie, (req, res) => {
    res.json(res.movie)
})

router.post('/', async (req, res) => {
    const movie = new Movie({
        movieDirector: req.body.movieDirector,
        movieTitle: req.body.movieTitle,
    })
    try { 
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})

router.delete('/:id', getMovie, async (req, res) =>{ 
    try {
        await res.movie.remove()
        res.json({ message: 'Deleted movie'})
    } catch {
        res.status(500).json({ message: 'could not find movie. '})
    }
})

router.patch('/:id', getMovie, async (req, res) =>{

})

async function getMovie(req, res, next) {
    let movie
    try {
        movie = await Movie.findById(req.params.id)
        if(movie === null) {
            return res.status(404).json({ message: 'Cannont find movie'})
        }
    } catch (err) {
        res.status(500).json({ message: 'ID selected was not found'})
    }
    res.movie = movie
    next()
}

module.exports = router
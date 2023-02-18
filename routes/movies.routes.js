const router = require("express").Router();
const Movie = require('../models/Movie.model');
const Celeb = require('../models/Celebrity.model.js');


router.get('/', (req, res, next)=>{
    Movie.find()
    .then((allMovies)=>{
        res.render('movies/movies', {allMovies})
    })
    .catch((err)=>{
        console.log(err)
    })
})


router.get('/create', (req,res,next)=>{
        Celeb.find()
    .then((celebrity)=>{
        res.render('movies/new-movie', {celebrity})
    })
})



// router.get('/create',(req,res,next)=>{
//     res.render('movies/new-movie.hbs')
// })



router.post('/create', (req, res, next)=>{

    Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
    //   cast: req.body.cast
    })
    .then((createdMovie)=>{
      console.log(createdMovie)
      res.redirect('/movies')
    })
    .catch((err)=>{
      res.render('movies/new-movie.hbs')
      console.log(err)
    })
})


module.exports = router;
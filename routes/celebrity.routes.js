const router = require("express").Router();
// const { findByIdAndRemove } = require('../models/Celebrity.model.js');
const Celeb = require('../models/Celebrity.model.js');
// all your routes here

router.get('/', (req, res, next) => {
    Celeb.find()
    .then(allTheCelebritiesFromDB => {
      // -> allTheBooksFromDB is a placeholder, it can be any word
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
  
      // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
      res.render('celebrities/celebrities.hbs', { celeb: allTheCelebritiesFromDB }); // pass `allTheBooksFromDB` to the view (as a variable books to be used in the HBS)
    })
        .catch(error => {
          console.log('Error while getting the celebrities from the DB: ', error);
     
          next(error);
        });
  });
  
  router.get('/create',(req,res,next)=>{
    res.render('celebrities/new-celebrity.hbs')
  })

  router.post('/create', (req, res, next)=>{



    Celeb.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    .then((createdCeleb)=>{
      console.log(createdCeleb)
    })
    .catch((err)=>{
      res.render('celebrities/new-celebrity.hbs')
      console.log(err)
    })

  })





module.exports = router;
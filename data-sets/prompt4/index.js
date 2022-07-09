let mongoose = require( 'mongoose')

mongoose.connect( 'mongodb://127.0.0.1:27017/Superhero', {useNewUrlParser: true})

let db = require('./superheroes.json')

let Superhero = mongoose.model( 'Superhero', new mongoose.Schema({
   universe: {},
   movies: [{title: String, year: Number, characters: [ Object, ], } ], 
}))

Superhero.deleteMany({})
   .then(results => {
      console.log(results)
      return Superhero.create(db)
      
   })
   .then(db =>{
      console.log(db)
      process.exit()
   })

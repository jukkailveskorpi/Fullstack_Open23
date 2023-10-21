const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  //`mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/personApp?retryWrites=true&w=majority`
  `mongodb+srv://solarsystems3:${password}@clustertest.zwk5zxv.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const PersonSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', PersonSchema)

const person = new Person({
  name: 'Richard st Vicius',
  number: '050567234',
})

/*person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
}) */

Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
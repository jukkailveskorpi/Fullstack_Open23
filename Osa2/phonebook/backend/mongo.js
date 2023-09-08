const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  //`mongodb+srv://solarsystems3:${password}@cluster0.o1opl.mongodb.net/personApp?retryWrites=true&w=majority`
  `mongodb+srv://solarsystems3:${password}@clustertest.zwk5zxv.mongodb.net/persons?retryWrites=true&w=majority`
 
mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({

 // {
   // id: 1,
    name: "Bill Gates ",
    number: "0405522134 ",
  }
 /*  {
    id: 2,
    name: "Dan Abramov ",
    number: "0507723411 "
  },
  {
    id: 3,
    name: "Steven Jobs ",
    number: "05065245611 "
  },
  {
    id: 5,
    name: "Linda Liukas ",
    number: "0408772341 "
  },
  {
    id: 6,
    name: "Jorma Ollila ",
    number: "040726311 "
  },
  {
    id: 7,
    name: "Linus Torvalds ",
    number: "040772341 "
  },
  {
    id: 8,
    name: "Ilkka Hulkko ",
    number: "0407723411 "
  },
  {
    id: 9,
    name: "Ada Locelace ",
    number: "0412231223 "
  }


 name: 'Peter Forsell',
  number: '0405628375',
}*/
)

/*person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})*/

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})
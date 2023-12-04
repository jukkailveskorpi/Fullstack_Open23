require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
//const morgan = require('morgan')


const Person = require('./models/person')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}

/*morgan.token('req-body', (req) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body);
  }
  return '';
})

app.use(
  morgan(
    'tiny :method :url :status :res[content-lenght] - :response-time ms :date[web] :req-body'
    )
  )*/

/*const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint'})
}*/



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
  return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('dist'))

     /* let persons = [
    {
        id: 1,
        name: "Bill Gates ",
        number: "0405522134 "
      },
      {
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
        name: "Ilkka Hulkko",
        number: "04015288821",
        id: 8
      },
      {
        name: "Mary peepcock",
        number: "0509938266",
        id: 9
      },
      {
        name: "Jussi Ahonen",
        number: "04055764124",
        id: 11
      },
      {
        name: "Nico Andelin",
        number: "0409987234",
        id: 12
      },
      {
        name: "Peter Forsell",
        number: "0408822345",
        id: 13
      }
    ]*/

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
    response.json(persons)
})
})

/*const generatedId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(p => p.id))
  : 0
  return maxId + 1
}*/

app.post('/api/persons', (request, response) => {
  const body = request.body

 /* if (body.name === undefined) {
  return response.status(400).json({ error: 'name missing' }) 
}*/

const person = new Person({
  name: body.name,
  number: body.number,
})
  //id: generatedId(),

person.save()
.then(savedPerson => {
response.json(savedPerson)
})
.catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
  //console.log(person.id, typeof person.id, id, typeof id, person.id === id)
  if (person) {
  response.json(person)
} else {
  response.status(404).end()
}
})
.catch(error => next(error))
  })

/*app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  Person = Person.filter(person => person.id !== id)
  response.status(204).end()
})*/


app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body

  Person.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  ) 
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})




app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
.then(result => {
  response.status(204).end()
})
.catch(error => next(error))

/* const id = Number(request.params.id)
persons = persons.filter(person => person.id !== id)
response.status(204).end()*/
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})

/*
PS administrator
netstat -ano | findstr :3001
taskkill /PID 3984 /F
*/
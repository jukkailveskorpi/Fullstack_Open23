const express = require('express')
const app = express()
const cors = require('cors')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(cors())
app.use(express.json())
app.use(requestLogger)

let persons = [
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
      id: 8,
      name: "Ilkka Hulkko ",
      number: "0407723411 "
    },
    {
      id: 9,
      name: "Ada Locelace ",
      number: "0412231223 "
    }
  ]

app.get('/info', (req, res) => {
  const requestTime = new Date(Date.now()) 
  res.send(`<p>Phonebook has info for ${persons.length} people in ${requestTime} </p>`)
}) 

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const generateId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(p => p.id))
  : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }
 
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
    persons = persons.concat(person)

    response.json(person)
})


app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.use(unknownEndpoint)

const PORT = 3001
//process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
})

/*const express = require('express')
const app = express()
const morgan =  require('morgan');
const cors = require('cors')
//const PORT = 3001

app.use(morgan('tiny'))
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join('')
}))


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

  //app.use(cors());

  /*morgan.token("person", (req, res) => {
    if (req.method === "POST") return JSON.stringify(req.body);
    return null;
  }) */

  //app.use(express.json());

 /*app.use(
    morgan(
          ":method :url :status :res[content-length] - :'response-time ms :person"
          ) 
        ); 
  
const getRand = () => Math.floor(Math.random() * 10000)

app.get('/info', (req, res) => {
  const requestTime = new Date(Date.now()) 
  const formattedTime = requestTime.toLocaleString();
  res.write("<p>Phonebook has info for " + persons.length + " people in </p>")
  res.write("<p>Current time: " + formattedTime + "</p>");
  res.send()
}) 

app.get('/api/persons', (req, res) => {
  res.json(persons)
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
// response.json(person)
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id);
  response.status(204).end()
});*/
//app.use(unknownEndpoint)

/*const generateId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(p => p.id))
  : 0
  return maxId + 1
} 

app.post('/api/persons', (req, res) => {
  const { body } = req;*/
  //console.log(request.body)
  //const content = request.body
/*
  if (!body.name) {
    return res.status(400).json({
      error: 'name is required'
    })
  }
 
  if (!content.number) {
    return res.status(400).json({
      error: "number is required"
    })
  }

  if (persons.find(p => p.name === content.name)) {
    return response.status(400).json({
        error: "name must be unique"
    })
}

  const newPerson = {
    ...request.body, id: getRand()
  }
    persons = persons.concat(newPerson)
    response.json(newPerson)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
}) 

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`) */


const express = require('express')
const app = express()
const Person = require('./models/person')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()




const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:', request.path)
  console.log('Body:', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('build'))

let persons =[
]



/*const mongoose = require('mongoose')

const url =
  `mongodb+srv://solarsystems3:${password}@clustertest.zwk5zxv.mongodb.net/personsApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
}) */


//const Person = mongoose.model('Person', personSchema)

/*const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
}) */

//app.use(morgan('tiny'))
//morgan custom for Post
function logRequest(req, res, next) {
morgan.token('req-body', function () {
  return JSON.stringify(req.body);
}); 

/*morgan('object', function (req, res) {
  return `${JSON.stringify(req, body)}`
})*/

morgan(':method :url :status :res[content-length] - :response-time ms :date[web] :req-body') (req, res, next);}

app.use(logRequest);
/*app.use(morgan(logginFormat, {
  skip: function (req, res) {
    return req.method !== 'POST';
  },
  stream: process.stdout,
}));*/

/*let persons = [
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
  ] */

app.get('/info', (req, res) => {
  const requestTime = new Date(Date.now()) 
  res.send(`<p>Phonebook has info for ${persons.length} people in ${requestTime} </p>`)
}) 

/*app.get('/api/persons', (req, res) => {
  res.json(persons)
})*/

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
  res.json(persons)
})
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
    });
  }

  if(!body.number) {
    return response.status(400).json({
    error: 'number missing'
  });
  }
 
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
    persons = persons.concat(person)
   // console.log(JSON.stringify(request.body));
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

const PORT = process.env.PORT 
//|| 3001
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
}) 













/*
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
}) 
*/

/*
chatGPT
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Define a custom token for logging the request body in POST requests
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body);
});

// Define the logging format
const loggingFormat = ':method :url :status :res[content-length] - :response-time ms';

// Log requests using Morgan middleware
app.use(morgan(loggingFormat));
app.use(morgan(loggingFormat, {
  skip: function (req, res) {
    return req.method !== 'POST';
  },
  stream: process.stdout,
}));

let persons = [
  {
    id: 1,
    name: 'Bill Gates',
    number: '0405522134',
  },
  {
    id: 2,
    name: 'Dan Abramov',
    number: '0507723411',
  },
  {
    id: 3,
    name: 'Steven Jobs',
    number: '05065245611',
  },
  {
    id: 5,
    name: 'Ada Locelace',
    number: '0412231223',
  },
];

app.get('/info', (req, res) => {
  const requestTime = new Date(Date.now());
  res.send(`<p>Phonebook has info for ${persons.length} people in ${requestTime} </p>`);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1;
};

app.post('/api/persons', (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: 'name missing',
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing',
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);
  response.json(person);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/

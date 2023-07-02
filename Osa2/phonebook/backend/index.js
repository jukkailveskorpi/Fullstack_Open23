const http = require('http')

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

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(JSON.stringify(persons))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
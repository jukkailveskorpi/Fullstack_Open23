import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const persons = [
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
      name: "Peter Forsell",
      number: "0408822345",
      id: 6
    }
  ]

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App persons={persons} />
    </React.StrictMode>,
  )

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

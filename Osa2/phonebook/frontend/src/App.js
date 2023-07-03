import React, { useState, useEffect } from 'react'
import './App.css';
import Persons from './components/Persons'
import Header from './components/Header'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Footer from './components/Footer' 

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }
  const className = `message ${notification.color}`
  return (
    <div className={className} >
      {notification.message}
    </div>
  )
}

const App =()=> {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const displayMessage = (message, color = "notification") => {
    setNotificationMessage({ message, color })
    setTimeout(() => setNotificationMessage(null), 5000)
  }

 
   /* if (
       persons.some(
        (persons) => persons.name.toLowerCase() === newPerson.toLowerCase())
    )
       {
        alert (`${newPerson} is already added to phonebook`);
        setNewPerson("");
        setNewNumber("");
        return
      }*/
      const addPerson = (event) => {
        event.preventDefault()

      const filteredPersons = persons.filter(person => person.name === newPerson)
      if (filteredPersons.length !== 0){

        const person = filteredPersons[0]
        const id = person.id
        const confirmMessage = `${person.name} is already added to the phonebook, do you want replace the old number to new one?`

        if (window.confirm(confirmMessage)) {
          const changedPerson = { ...person, number: newNumber}

      personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !==id ? person: returnedPerson))
      displayMessage(`Number updated for ${returnedPerson.name} sucessfully`)
        setNewPerson('')
        setNewNumber('')
      })
      .catch(error => {
        if (error.response.data.error === "numer not valid") {
          displayMessage(error.response.data.error, "error")
        }
        else {
          displayMessage (`information of ${person.name} has already been deleted from server`, "error")
          setPersons(persons.filter(e => e.id !== person.id))
        } 
      })
    }
      }
      else {
      const personObject = {
      name: newPerson,
      number: newNumber
    }

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        displayMessage(`Added ${returnedPerson.name} sucessfully`)
        setNewPerson('')
        setNewNumber('')
      })
    .catch(error => {
      displayMessage(error.response.data.error, "error")
    })
    }
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  } 

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 

 const handleFilterChange =(event)=> {
    setFilter (event.target.value)
  } 

 
 const deletePerson = person => {

  if (window.confirm(`delete ${person.name} ???`)){
    const id = person.id
  /*}
  const person = persons.find((person) => person.id === id);
  const confirmation = window.confirm(`Delete ${person.name}?`);
       if(confirmation) { */
        
        personService
        .deletePerson(person.id)
        .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        displayMessage(`delete number for ${person.name} sucessfully`) 
          })
          .catch(() => {
            displayMessage(`information of ${person.name} has already been deleted from server`, "error")
            setPersons(persons.filter(e => e.id !== person.id))
          })
          }
          }; 
    
  return (
    <div className="App">
       <br></br><br></br><br></br>
      
       <Header />
       <Notification notification={notificationMessage} />
       <br></br>
        
        <Filter 
         setFilter={setFilter} 
         handleFilterChange={handleFilterChange}
        />
       
       <br></br>
       
       <PersonForm 
        addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
       />
       
       <React.StrictMode>
       <div>
       <Persons 
        persons={persons} 
        filter={filter} 
        deleteButton={deletePerson}
        />
        </div>
        </React.StrictMode>
       <br></br>
       <Footer />
       <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;
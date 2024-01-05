import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson =(event)=> {
   event.PreventDefault()
   console.log('button clicked', event.target)
   const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
   }
   setPersons(persons.concat(personObject))
   setNewPerson('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
    setNewNumber(event.target.value)
  } 

  return (
  <div> 
    <h1>Phonebook</h1>

    <form onSubmit={addPerson}>
    <p>name: </p>
    <input 
        value={newPerson}
        onChange={handlePersonChange}
        />
    <br></br>
    <p>number: </p>
    <input 
        value={newNumber}
        onChange={handlePersonChange}
        />    
    <button type="submit">save</button>
    </form>
    
    <ul>
    {persons.map(person => 
    <Person key={person.id} person={person} />
    )}
    </ul>
   
    </div>
  )
}

export default App


 /*([
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
    }
  ])*/

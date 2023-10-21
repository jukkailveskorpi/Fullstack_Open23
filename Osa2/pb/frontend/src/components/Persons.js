import React from 'react';
import Person from './Person'

const Persons = ({ persons, filter, deleteButton }) => {

       // const persons = props.persons
      // const filter = props.filter
       //const deletePerson = props.deletePerson
   
    return (
        <ul>
            {persons
               .filter((person) =>
                 person.name.toLowerCase().includes(filter))
                    .map((person) => 
                        /*<ul key={person.id}>
                            <>
                                {person.name} {person.number + "   "} 
                         
                            <button type="button" onClick={() => deletePerson(person.id)}>
                            delete 
                            </button>      
                            </>
                         </ul>*/
                         
                         
                         <Person
                          key = {person.id}
                          person = {person}
                          deleteButton = {deleteButton}
                          />
                         
                         
                         )}    
        </ul>


/*<ul>
      {persons.map((persons) => 
        <Person 
          key = {person.id} 
          person = {person} 
          deleteButton = {deleteButton}
        />
      )}
    </ul>*/

   )
}
  
  export default Persons;
import { useState } from 'react'

const Name = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 'Arto Hellas',
      number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState(
    'a new name...'
  )
  const [newNumber, setNewNumber] = useState(
    'a new number...'
  ) 
  const addName = (event) => 
    {event.preventDefault()
    const nameObject = {
      name: newName,
      id: newName,
      number: newNumber,
    }

    var names = persons.map(function(name) {return name.name})
    var checkName = newName
    if ((names.includes(checkName)) === true) {window.alert(`${newName} is already added to phonebook`
    )} 
    else 
    {setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')  }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (  
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input 
          value={newName} 
          onChange={handleNameChange}
        />
      </form>
      <form onSubmit={addName}>
        number: <input 
          value={newNumber} 
          onChange={handleNumberChange}
        />
        <br></br>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      
        {persons.map(person => 
          <Name key={person.id} person={person} />
        )}
      
    </div>
  )

}

export default App
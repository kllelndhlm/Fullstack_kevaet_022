import { useState } from 'react'

const Name = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState(
    'a new note...'
  ) 
  const addName = (event) => 
    {event.preventDefault()
    const nameObject = {
      name: newName,
      id: newName,
    }

    var names = persons.map(function(name) {return name.name})
    var checkName = newName
    if ((names.includes(checkName)) === true) {window.alert(`${newName} is already added to phonebook`
    )} 
    else 
    {setPersons(persons.concat(nameObject))
    setNewName('')}
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (  
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input 
          value={newName} 
          onChange={handleNameChange}
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
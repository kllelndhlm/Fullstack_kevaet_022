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
//  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: newName,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
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
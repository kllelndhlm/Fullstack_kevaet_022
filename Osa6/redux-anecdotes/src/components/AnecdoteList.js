import { useDispatch, useSelector } from 'react-redux'
import { increaseVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    //anecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1)

  
    return (
        <div>
          {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(increaseVotes(anecdote.id))}>vote</button>
              </div>
            </div>
          )}
        </div>
      )
    } 
  export default AnecdoteList
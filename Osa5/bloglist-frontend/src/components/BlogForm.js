import React, {useState} from 'react' 
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState('') 
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleChange = (event) => {
    setNewBlog(event.target.value)
  }
  const handleAuthorChange = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setNewTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    console.log(event.target.value)
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      author: newAuthor,
      title: newTitle,
      url: newUrl,
    })
    
    setNewBlog('')
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <div>
    <form onSubmit={addBlog}>
      <div>
      title:
        <input
          type="title"
          value={newTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
      author:
        <input
          type="author"
          value={newAuthor}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
      url:
        <input
          value={newUrl}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">create</button>
    </form> 
    </div>
  )
}
BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
  }

export default BlogForm
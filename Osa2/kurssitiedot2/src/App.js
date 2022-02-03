const Header = ({ course }) =>
  <h1>{course.name}</h1>

const Part = ({ part }) => 
  <p>{part.name} {part.exercises}</p>


const Content = ({ parts }) =>{
  return (
    <div>
      
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      
    </div>
  )
}

const Course = ({course}) => 
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
  </div>


function App() {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
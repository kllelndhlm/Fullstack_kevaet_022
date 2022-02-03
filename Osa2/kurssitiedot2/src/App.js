const Header = ({ course }) =>
  <h3>{course.name}</h3>

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

const Total = ({ parts }) => {
  return (
    <div>
      <b>total of {parts.map(item => item.exercises).reduce((prev, cur) => prev + cur, 0
      )} exercises</b>
    </div>
  )
}

const Course = ({course}) => 
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>

const Multicourse = ({ courses }) =>{

  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h2>Web development curriculum</h2>
      <Multicourse courses={courses} />
    </div>
  )
}

export default App

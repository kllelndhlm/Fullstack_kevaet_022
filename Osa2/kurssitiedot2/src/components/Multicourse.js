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

export default Multicourse
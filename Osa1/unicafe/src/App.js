import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.text2}
    </div>  
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <p></p>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value ={props.good} text2='' />
      <StatisticLine text="neutral" value ={props.neutral} text2='' />
      <StatisticLine text="bad" value ={props.bad} text2='' />
      <StatisticLine text="average" value ={(1 * props.good +  -1 * props.bad) / (props.good + props.neutral + props.bad)} text2=''/>
      <StatisticLine text="positive" value ={(props.good / (props.good + props.neutral + props.bad)) * 100} text2='%' />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
    </div>
  )
}

export default App
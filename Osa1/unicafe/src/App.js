import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <p>
      <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good + props.neutral + props.bad}</p>
        <p>average {(1 * props.good +  -1 * props.bad) / (props.good + props.neutral + props.bad)}</p>
        <p>positive { (props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
      </p>
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
        <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
    </div>
  )
}

export default App
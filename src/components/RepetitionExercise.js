import {useState} from "react";

export default function RepetitionExercise({exercise,}) {
    let [count, setCount] = useState(0)
    return <div> 
      <p>{exercise.name} </p>
      <p style={{fontSize: "6em"}}>{count}</p>
      <button onClick={() => setCount(count=>count+1)}>Add</button>
      <button onClick={() => setCount(0)} >Reset</button>
      </div>
  }
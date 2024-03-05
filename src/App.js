import './App.css';
import {useCallback, useState} from 'react'
import DurationExercise from './components/DurationExercise'
import RepetitionExercise from './components/RepetitionExercise';


const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "Duration"
const REPETITION_EXERCISE = "Repetition"





let exerciseList =[
{type: DURATION_EXERCISE, name:"Running"},
{type: DURATION_EXERCISE, name:"Swimming"},
{type: REPETITION_EXERCISE, name:" Squats"},
{type: REPETITION_EXERCISE, name:"Push ups"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  let [currentExercise, setCurrentExercise] =useState()
  let screenComponent = undefined
  let buttonClick = useCallback((exercise)  =>{
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })
  
  if(currentScreen === MENU_SCREEN) {
    screenComponent = 
    <div>
      <p>Exercise Menu</p>
      {exerciseList.map((exercise)=> {
        return <li key={exercise.name} >
        <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
        </li>
      })}
      
    </div>
  } else if (currentScreen === EXERCISE_SCREEN){
  switch(currentExercise.type) {
    case DURATION_EXERCISE:
      screenComponent =  <DurationExercise 
        setCurrentScreen={() =>setCurrentScreen(MENU_SCREEN)} 
        exercise={currentExercise}/> 
        break;
        case REPETITION_EXERCISE:
          screenComponent =  <RepetitionExercise 
        setCurrentScreen={() =>setCurrentScreen(MENU_SCREEN)} 
        exercise={currentExercise}/> 
        break;
        default:
          screenComponent = undefined
  }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
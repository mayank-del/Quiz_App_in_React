
//import './App.css';
import {useContext} from 'react';
import { QuizContext } from './contexts/TestProvider';
import './index.css'
import Question from './Question';

function App() {

  const [quizState,dispatch]=useContext(QuizContext);
  console.log(quizState)
  return (
    <div className="quiz">
      {quizState.showResults && 
       <div className="results">
       <div className="congratulations">Congratulations!</div>
       <div className="results-info">
         <div>You have completed the quiz.</div>
         <div>
           You've got {quizState.correctAnswersCount} of {" "}
           {quizState.questions.length} right.
         </div>
       </div>
       <div className='next-button' onClick={()=>dispatch({type:"RESTART"})}>Restart Quiz</div>
       </div>
      }
      {!quizState.showResults &&(
        <div>
             <div className='score'>
             Question {quizState.currentQuestionIndex +1}/{quizState.questions.length}
           </div>
           <Question/>
           <div className='next-button' 
           onClick={()=>dispatch({type:"NEXT_QUESTION"})}
           >
             Next question
           </div> 
           </div>
      )}
   
    </div>
  );
}

export default App;

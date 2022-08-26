import React from 'react';
import {useContext} from 'react';
import {QuizContext} from './contexts/TestProvider';
import Answer from './Answer.jsx';


function Question() {
    const [quizState,dispatch]=useContext(QuizContext);
    const currentQuestion=quizState.questions[quizState.currentQuestionIndex]
    //console.log(currentQuestion.question)
  return (
    <div>
    <div className='question'>
        
        {currentQuestion.question}
    </div>
    <div className='answers'>
        {quizState.answers.map((answer,index)=>(
                <Answer
                 answerText={answer}
                 key={index}
                 index={index} 
                 currentAnswer={quizState.currentAnswer}
                 correctAnswer={currentQuestion.correctAnswer}
                 onSelectAnswer={(answerText)=>
                dispatch({type:'SELECT_ANSWER',payload:answerText})}//type is a unique string of action type and payload is having data we need
                 />
            ))}
        
    </div>
    </div>
  );
};

export default Question
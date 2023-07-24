import React, { useContext, useEffect, useState } from 'react';
import PointsContext from '../context/PointsContext';

const Question = ({ category, type, difficulty, question, correctAnswer, incorrectAnswers }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
   
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const shuffled = shuffleArray(allAnswers);
    setShuffledAnswers(shuffled);
  }, [correctAnswer, incorrectAnswers]);


  
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };


  const {increment , decrement} = useContext(PointsContext) 
  
  const handleAnswerClick = (answer) => {
   if (answer === correctAnswer) {
    increment();
    setIsAnswerCorrect(true);
   } else { 
    decrement();
    setIsAnswerCorrect(false);
    
   }
  };

 
 

  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD');

 

  return (
    <div>
     
      <div className='card'>
        <h2>{category}</h2>
        <p className='difficulty'>{difficulty}</p>
        <p className='question'>{sanitize(question)}</p>
        {shuffledAnswers.map((answer) => (
          <p key={answer}
            onClick={ () => handleAnswerClick(answer)
       }
            className={`answer`} >
            {sanitize(answer) }
          </p>
        ))}
     

           <p className='message' > 
            {isAnswerCorrect ? `Correct! is ${correctAnswer}` : (isAnswerCorrect === null) ? "" :  `Incorrect is ${correctAnswer}`}</p>

      </div>
    </div>
  );
};

export default Question;

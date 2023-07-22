import { useContext, useEffect, useState } from 'react'
import SettingsContext from '../context/SettingsContext'
import Question from './Question'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const { settings } = useContext(SettingsContext)
  
  const apiUrl = 'https://opentdb.com/api.php?type=multiple'

  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = '&amount=' + settings.number
      const filterCategory = '&category=' + (settings.category === 'Sports' ? 21 : (settings.category === 'Vehicles' ? 28 : 22));
      const filterDifficulty =  '&difficulty=' + settings.difficulty.toLowerCase()
      const response = await fetch(`${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`)
      const data = await response.json()
      setQuestions(data.results)

    }
    
    fetchData()
  }, [settings])

  

  return (
    <div className='bg-quiz'>
      <div className='container questions'>

        {
        questions.map((question) => (
          <Question 
            key={question.correct_answer}
            category={question.category}
            difficulty={question.difficulty}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            
          />
        ))
            
        }
        
      </div>
    </div>
  )
}

export default Questions

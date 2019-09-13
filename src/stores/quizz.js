import { writable, derived } from 'svelte/store'
import questions from '../assets/questions.json'
import Question from '../models/Question'

/**
 * 
 * @param {Array<Question>} questionsList 
 */
function createQuizzStore(questionsList) {
  const questions = writable(questionsList)
  const index = writable(-1)
  const score = writable(0)

  return {
    questions: {
      subscribe: questions.subscribe,
      updateCurrent: derived(index, $index => (updatedQuestion) =>
          questions.update($questions =>
            $questions.map((q, i) =>
              ({ ...q, ...(i === $index ? updatedQuestion : {})})
            )
          )
        ),
    },
    index: {
      subscribe: index.subscribe,
      reset: () => index.set(-1),
      increment: () => index.update(n => n + 1)
    },
    score: {
      subscribe: score.subscribe,
      reset: () => score.set(0),
      update: valid => score.update(n => valid ? n + 1 : n)
    },
    currentQuestion: derived([questions, index], ([$questions, $index]) => $questions[$index])
  }
}

const quizz = createQuizzStore(questions)
export default quizz

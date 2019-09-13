import Question from './Question'

/**
 * Set of question, with a current index and a score
 * @param {Question[]} questions 
 * @property {number} index
 * @property {number} score
 */
export default class Quizz {
  /**
   * 
   * @param {Question[]} questions 
   */
  constructor(questions) {
    this.questions = questions
    this.index = -1
    this.score = 0;
  }

  reset() {
    this.score = 0;
    this.index = -1;
  }

  /**
   * 
   * @param {boolean} valid 
   */
  updateScore(valid) {
    if (valid) this.score++
  }

  updateIndex() {
    this.index++
  }

  getCurrentQuestion() {
    if (this.index < this.questions.length) return this.questions[this.index]
  }
}

/**
   * A question is made of a picture and an a set of audio source,
   * and has an answer between true and false (one valid, one from the player)
   * @param {string} img 
   * @param {SoundSet} audio 
   * @property {boolean} isArt
   * @property {boolean} answer
   */
export default class Question {
  constructor(img, audio) {
    this.img = img
    this.audio = audio
  }

  /**
   * Set question valid response
   * @param {boolean} isArt 
   */
  setisArt(isArt) {
    this.isArt = isArt
  }

  /**
   * Set player's answer
   * @param {boolean} answer 
   */
  setAnswer(answer) {
    this.answer = answer
  }
}

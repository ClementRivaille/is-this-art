import { writable } from "svelte/store";

function createGameStore() {
  const intro = writable(false)
  const quizz = writable(false)
  const end = writable(false)
  const outro = writable(false)

  return {
    intro: intro.subscribe,
    quizz: quizz.subscribe,
    end: end.subscribe,
    outro: outro.subscribe,
    
  }
}
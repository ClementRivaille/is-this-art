<script>
export let question
export let onAnswer

export let showResult
export let answer
export let isArt
</script>

<div class="question">
    <h2>Is this Art?</h2>
    <img src="{question.img}" alt="{question.label}"/>

  <div class="buttons">
    <button 
      class:selected={showResult && answer}
      class:answer="{showResult && isArt}"
      class:right="{showResult && isArt && answer}"
      class:wrong="{showResult && isArt && !answer}"
      disabled={showResult}
      on:click={() => onAnswer(true)}>
        Yes
      </button>
    <button 
      class:selected={showResult && !answer}
      class:answer="{showResult && !isArt}"
      class:right="{showResult && !isArt && !answer}"
      class:wrong="{showResult && !isArt && answer}"
      disabled={showResult}
      on:click={() => onAnswer(false)}>
        No
      </button>
  </div>
</div>


<style>
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .question > * + * {
    margin-top: 3rem;
  }

  h2 {
    margin-bottom: 0;
    font-size: 3rem;
  }

  img {
    height: 60vh;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5em;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.8;
  }

  .buttons {
    display: flex;
    width: 40%;
    justify-content: space-between
  }
  .buttons > * {
    width: 45%;
  }

  button.selected {
    border: 2px solid black;
  }
  button.answer {
    font-weight: bold;
  }
  .wrong {
    background-color: red;
  }
  .right {
    background-color: green;
  }
</style>

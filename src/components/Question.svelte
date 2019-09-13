<script>
export let question
export let onAnswer
</script>

<div class="question">
    <h2>Is this Art?</h2>
    <img src="{question.img}" alt="{question.label}"/>

  <div class="buttons">
    <button on:click={() => onAnswer(true)}>Yes</button>
    <button on:click={() => onAnswer(false)}>No</button>
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

  .buttons {
    display: flex;
    width: 40%;
    justify-content: space-between
  }
  .buttons > * {
    width: 45%;
  }
</style>
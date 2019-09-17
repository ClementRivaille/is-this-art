<script>
	import quizz from './stores/quizz'

	import Question from './components/Question.svelte'

	function start() {
		quizz.index.reset()
		quizz.score.reset()
		quizz.index.increment()
	}

	let updateCurrent = quizz.questions.updateCurrent

	function answer(value) {
		$updateCurrent({
			answer: value,
			isArt: Math.random() > 0.5 ? true : false
		})
		// quizz.index.increment()
		quizz.showResults.set(true)
	}

	const questionIndex = quizz.index
	const currentQuestion = quizz.currentQuestion
	const questions = quizz.questions
	const showResults = quizz.showResults
</script>

<style>
	h1 {
		color: purple;
	}
</style>
{#if $questionIndex === -1}
	<h1>Is this Art?</h1>
	<p>Welcome to this art lesson!</p>
	<button on:click={quizz.index.increment}>Let's go</button>
{/if}
{#if $questionIndex > -1}
	{$questionIndex}
	<Question question={$currentQuestion} onAnswer={answer} showResult={$showResults} isArt={$currentQuestion.isArt} answer={$currentQuestion.answer} />
{/if}

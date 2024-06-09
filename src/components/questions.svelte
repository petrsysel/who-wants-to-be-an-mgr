<script lang="ts">
    import Button from "../shared/button.svelte";
    import { gameState, questionAmount } from "./gameState";
    import { loadQuestions, type Question } from "./questionLoader";
    import QuestionView from "./questionView.svelte";

    let currentQuestion = 0
    let questions: Promise<Question[]> = loadQuestions('questions.json')
    questions.then(qList => {
        questionAmount.set(qList.length)
    })

    function nextQuestion(){
        currentQuestion++
        if(currentQuestion > $questionAmount - 1){
            gameState.set('result')
        }
    }

</script>

{#await questions}
    <div class="loading">
        <p>Načítání...</p>
    </div>
{:then loadedQuestions}
    {#each loadedQuestions as question}
        <QuestionView visible = {loadedQuestions.indexOf(question) == currentQuestion} on:click={nextQuestion} {question}/>
    {/each}
{/await}

<style>
    .loading{
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .loading p{
        font-size: 2rem;
    }
</style>
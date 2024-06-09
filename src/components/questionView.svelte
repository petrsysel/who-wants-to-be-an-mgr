<script lang="ts">
    import { fade } from "svelte/transition";
    import Button from "../shared/button.svelte";
    import AnswerView from "./answerView.svelte";
    import type { Question } from "./questionLoader";

    export let question: Question = {
        question: "",
        answers: [

        ]
    }
    export let visible: boolean
    let answered = false
</script>

{#if visible}
<div in:fade={{delay: 300, duration:300}} out:fade={{duration:300}} class="container">
    <h2>{question.question}</h2>
    <div class="answer-container">
        {#each question.answers as a}
            <AnswerView index={question.answers.indexOf(a)} {answered} answer={a} on:answered={() => {answered = true}}/>
        {/each}
    </div>
    <div class="btn-wrapper {answered?'visible':'hidden'}">
        <Button type="wide" on:click>Další</Button>
    </div>
</div>
{/if}


<style>
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .answer-container{
        width: calc(90%);
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

    }
    .btn-wrapper{
        margin-top: 1rem;
    }
    .hidden{
        visibility: hidden;
    }
    .visible{
        visibility: visible;
    }

    @media only screen and (max-width: 768px) {
        .answer-container{
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
        }
    }

</style>
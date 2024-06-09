<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Answer } from "./questionLoader";
    import { score } from "./gameState";

    export let answer: Answer
    export let answered: boolean = false
    export let index: number = 0
    const marks = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
    let tryResult: 'init' | 'correct' | 'wrong' = 'init'


    let eventDispatcher = createEventDispatcher()

    function handleTry(){
        if(answered) return
        answer.correct?
            tryResult = 'correct':
            tryResult = 'wrong'
        if(answer.correct) score.update(s => s+1)
        eventDispatcher('answered')
    }
</script>
<div class="btn-wrapper">
    <button class="btn {tryResult}" on:click={handleTry}>
        <div class="mark {answer.correct && answered ? "correct" : ''}">
            {marks[index]}
        </div>
        <p>{answer.text}</p>
    </button>
</div>

<style>
    
    .btn{
        background-color: transparent;
        color: var(--fg-main);
        border: 2px solid var(--fg-main);
        padding: 0.5rem;
        border-radius: 0.5rem;
        display: flex;

        width: 100%;
        margin-top: 0.5rem;
    }
    .btn:hover{
        cursor: pointer;
        filter: drop-shadow(0px 0px 4px var(--fg-main));
    }

    .btn p {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn .mark{
        /* flex: 0.05; */
        width: 2rem;
        height: 2rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        border: 2px solid var(--fg-main);
        border-radius: 50%;
    }
    .correct{
        background-color: rgb(14, 133, 14);
    }
    .wrong{
        background-color: rgb(202, 34, 34);
    }
</style>
<script>
    import Button from "../shared/button.svelte";
    import { gameState, questionAmount, score } from "./gameState";

    function newGame(){
        score.set(0)
        gameState.set('game')
    }
</script>

<div class="container">
    <h1 class="title">Chcete být jen bakalářem?</h1>
    <p>Tvoje score je: {$score}/{$questionAmount}</p>
    <Button on:click={newGame} type="big">Nová hra</Button>
</div>

<style>
    .container{
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

    }

    .container p{
        font-size: 3rem;
    }

    .title{
        font-size: 4rem;
        text-align: center;
    }
</style>
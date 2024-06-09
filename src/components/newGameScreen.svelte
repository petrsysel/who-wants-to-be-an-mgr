<script lang="ts">
    import Button from "../shared/button.svelte";
    import { gameState } from "./gameState";


</script>

<div class="screen">
    <h1 class="title">Chcete být jen bakalářem?</h1>

    <Button type='big' on:click={() => gameState.set('game')}>Nová hra</Button>
</div>


<style>
    .title{
        font-size: 4rem;
        text-align: center;
    }
    .screen{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
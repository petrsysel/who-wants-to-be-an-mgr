<script>
    import GlobalCss from "../components/globalCss.svelte";
    import NewGameScreen from "../components/newGameScreen.svelte";

    import {gameState} from '../components/gameState'
    import Questions from "../components/questions.svelte";
    import GameResult from "../components/gameResult.svelte";
</script>

<GlobalCss/>
{#if $gameState === 'menu'}
    <NewGameScreen/>

{:else if $gameState === 'game'}
    <Questions/>

{:else}
    <GameResult/>
{/if}


<style>
    
</style>
<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let type: 'primary' | 'big' | 'wide' = 'primary'

    const dispatch = createEventDispatcher()
    function onclick(){
        dispatch('click')
    }
</script>

<button class="{type}" on:click={onclick}>
    <slot/>
</button>

<style>
    button{
        background-color: transparent;
        color: orange;
        border: 2px solid orange;
        border-radius: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
    }
    button:hover{
        /* filter: drop-shadow(0,0,15px, orange); */
        filter: drop-shadow(0px 0px 4px orange);
    }
    .big{
        font-size: 3rem;
        border-width: 4px;
    }
    .wide{
        padding-left: 4rem;
        padding-right: 4rem;
        font-size: 1.2rem;
    }

</style>
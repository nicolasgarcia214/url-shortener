<script>
    import { fade } from 'svelte/transition';
    import Panel from '../Main/containers/Panel/Panel.svelte'
    let visible = false

    setTimeout(() => {
        visible = true
    }, 1500);
</script>

<main>
    {#if visible}
        <h1 transition:fade>MINUS</h1>
        <h3 transition:fade>URL shortening service</h3>
        <Panel />
    {/if} 
</main>

<style>
    main{
        overflow: hidden;
        height: 100vh;
        width: 100%;
        background: rgb(103,0,6);
        background: linear-gradient(0deg, #E63946 40%, #A8DADC 40%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    h1{
        color: #1D3557;
        text-shadow:1px 1px #3e5e8a, 2px 2px #3e5e8a, 3px 3px #3e5e8a, 4px 4px #3e5e8a, 5px 5px #3e5e8a;
        font-size: 4.5rem;
        margin: 0;
        padding: 1rem 0 0;
        font-family: "Banana Grotesk";
        font-weight: 800;
    }

    h3{
        color: #1D3557;
        font-size: 1.5rem;
        font-style: italic;
        margin: 0;
        padding:0 0 2rem;
        font-family: "Banana Grotesk";
        font-weight: 400;
    }
</style>
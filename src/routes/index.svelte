<script>
    import { onMount } from 'svelte';
    import Cursor, { useCursor, useImage } from "../components/Cursor.svelte";

    import Projects from "../components/Projects.svelte";
    import Header from "../components/Header.svelte";
    import Slider from "../components/Slider.svelte";
    import { fade } from "svelte/transition"
    let segment = 'index';
    export let ready;
    onMount(()=>ready=true);

</script>

<svelte:head>
    <title>Looksgreat</title>
</svelte:head>

<div class="wrapper">
    {#if ready}
        <Cursor/>
    {/if}
    <Header/>
    <main class="page">
        <div class="sliderOuter">
            {#if ready}
                <Slider/>
            {/if}
        </div>
        <Projects/>
    </main>
</div>

<style>
    :root {
        --main-color: #fff;
        --accent-color: #F65E08;
        --navigation-color: #EAEAEA;
        --second-color: #EAEAEA;
        --countdown-font-size: 200px;
        --title-font-size: 100px;
        --main-font-size: 15px;
        --color-cursor: #F23939;
    }
    :global(::selection) {
        background: transparent;
    }
    :global(a, button, body) {
        cursor: none;
    }
    :global(.wrapper) {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr-Roman'),
        url('../fonts/hinted-HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('../fonts/hinted-HelveticaNeueCyr-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .wrapper {
        background: #333333;
    }

    .page {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .sliderOuter {
        width: 100%;
        height: 100vh;
        background: #333333;
        position: relative;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        color: #eaeaea;
    }
</style>



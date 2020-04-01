<script>
    import { spring } from 'svelte/motion';
    import Projects from "../components/Projects.svelte";
    import Header from "../components/Header.svelte";

    let cursorText = '';

    let coords = spring({x: 0, y: 0}, {
        stiffness: 1, damping: 1
    });

    let coordsOuter = spring({x: 0, y: 0}, {
        stiffness: 0.1, damping: 0.7
    });

    let size = spring(10);

    function setCoords(e) {
        coords.set({x: e.clientX, y: e.clientY});
        coordsOuter.set({x: e.clientX, y: e.clientY});
    }

    function textEnter(event) {
        cursorText = event.target.getAttribute('data-cursor');
    }

    function textLeave() {
        cursorText = '';
    }

    $: console.log(cursorText);
</script>

<svelte:head>
    <title>Looksgreat</title>
</svelte:head>

<div on:mousemove="{e => setCoords(e)}"
     class="wrapper">
    <div class="circle-cursor circle-cursor--inner" style="transform:translate3d({$coords.x}px, {$coords.y}px, 0px)" class:hovered={cursorText.length > 1}>
        {#if cursorText.length > 1}
            {cursorText}
        {/if}
    </div>
    <div class="circle-cursor circle-cursor--outer" style="transform:translate3d({$coordsOuter.x}px, {$coordsOuter.y}px, 0px)" class:hovered={cursorText.length > 1}></div>
    <Header/>
    <main class="page">
        <div class="slider">
            slider
            <a on:mouseenter={event => textEnter(event)} on:mouseleave={() => textLeave()} href="mailto:perl.php.c@gmail.com" data-cursor="Написати">perl.php.c@gmail.com</a>
            <a on:mouseenter={event => textEnter(event)} on:mouseleave={() => textLeave()} href="mailto:perl.php.c@gmail.com" data-cursor="Ghjlfnb">perl.php.c@gmail.com</a>
        </div>
        <Projects/>
    </main>
</div>


<style>
    :root {
        --main-color: #fff;
        --accent-color: #F65E08;
        --second-color: #EAEAEA;
        --countdown-font-size: 200px;
        --title-font-size: 100px;
        --main-font-size: 15px;
        --color-cursor: #F23939;
        --position-x: 0px;
        --position-y: 0px;
    }
    :global(::selection) {
        background: transparent;
    }
    :global(a) {
        cursor: none;
    }
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr-Roman'),
        url('./static/fonts/hinted-HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('./static/fonts/hinted-HelveticaNeueCyr-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .wrapper {
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        overflow-x: hidden;
        scroll-snap-type: y mandatory
    }

    .page {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .slider {
        width: 100%;
        height: 100vh;
        background: #333333;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        color: #eaeaea;
    }

    .circle-cursor {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        border-radius: 50%;
        font-size: 0;
        transform-origin: 50% center;
        transition: scale .5s ease-in-out;
        transform: translate3d(var(--position-x), var(--position-y), 0px)
    }
    .circle-cursor.circle-cursor--inner {
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        z-index: 11000;
        background: var(--color-cursor);
        color: var(--color-cursor);
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .circle-cursor.circle-cursor--inner.hovered {
        width: 75px;
        height: 75px;
        margin-left: -37.5px;
        margin-top: -37.5px;
        text-align: center;
        font-size: 12px;
        background: transparent;
    }
    .circle-cursor.circle-cursor--outer {
        width: 28px;
        height: 28px;
        margin-left: -14px;
        margin-top: -14px;
        border: 1px solid var(--color-cursor);
        z-index: 12000;
        opacity: 0.2;
    }
    .circle-cursor.circle-cursor--outer.hovered {
        width: 105px;
        height: 105px;
        margin-left: -52.5px;
        margin-top: -52.5px;
        text-align: center;
        font-size: 12px;
        background: transparent;
        opacity: 1;
    }
</style>



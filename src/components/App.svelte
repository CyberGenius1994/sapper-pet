<script>
    import {spring} from 'svelte/motion';
    import Projects from "./Projects.svelte";
    import Header from "./Header.svelte";

    let cursorText = '';

    let coords = spring({x: 50, y: 50}, {
        stiffness: 1, damping: 1
    });

    let coordsOuter = spring({x: 50, y: 50}, {
        stiffness: 0.1, damping: 0.7
    });

    let size = spring(10);

    function setCoords(e) {
        coords.set({x: e.clientX, y: e.clientY});
        coordsOuter.set({x: e.clientX, y: e.clientY});
    }

    function textEnter(event) {
        let text = event.target.getAttribute('data-cursor');
        cursorText = text;
    }

    function textLeave() {
        cursorText = '';
    }
</script>
<div on:mousemove="{e => setCoords(e)}"
     class="wrapper">
	<div class="circle-cursor circle-cursor--inner" style="transform: translate3d({$coords.x}px, {$coords.y}px, 0px)" class:hovered={cursorText.length > 1}>
		{#if cursorText.length > 1}
			{cursorText}
		{/if}
	</div>
	<div class="circle-cursor circle-cursor--outer" style="transform: translate3d({$coordsOuter.x}px, {$coordsOuter.y}px, 0px)"></div>
	<Header/>
    <main class="page">
<!--        <a on:mouseenter={event => textEnter(event)} on:mouseleave={() => textLeave()} href="mailto:perl.php.c@gmail.com" data-cursor="Написати">perl.php.c@gmail.com</a>-->
<!--        <a on:mouseenter={event => textEnter(event)} on:mouseleave={() => textLeave()} href="mailto:perl.php.c@gmail.com" data-cursor="Ghjlfnb">perl.php.c@gmail.com</a>-->
	    <div class="slider">
			slider
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
	}
	:global(::selection) {
        background: transparent;
	}
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr-Roman'),
        url('/fonts/hinted-HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('/fonts/hinted-HelveticaNeueCyr-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
	.wrapper {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
	}
    .circle-cursor {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        border-radius: 50%;
        font-size: 0;
	    transform-origin: 50% center;
	    transition: font-size .5s ease-in-out, scale .5s ease-in-out;
    }
    .circle-cursor.circle-cursor--inner {
		width: 8px;
		height: 8px;
		left: -4px;
		top: -4px;
		z-index: 11000;
		background: var(--color-cursor);
		color: var(--color-cursor);
    }
    .circle-cursor.circle-cursor--inner.hovered {
        transform: scale(3);
        text-align: center;
        font-size: 12px;
        background: #000;
    }
    .circle-cursor.circle-cursor--outer {
        width: 28px;
        height: 28px;
        left: -14px;
        top: -14px;
        border: 1px solid var(--color-cursor);
        z-index: 12000;
        opacity: 0.2;
    }
	.page {
        height: 200vh;
	}
	.slider {
        width: 100%;
        height: 100vh;
        background: #333333;
        margin-bottom: 100vh;
        position: relative;
		z-index: 10;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        color: #eaeaea;
    }
</style>

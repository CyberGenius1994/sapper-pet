<script>
    import { onMount } from 'svelte';
    import slides from './slides-data.js';
    let interval = undefined;
    let currentNumber = 1;

    onMount(() => {
        interval = setInterval(getStart, 1000);
    })

    function getStart() {
        let curr = (!document.querySelector('.main-slider .slide.current') ? document.querySelector('.slide') : document.querySelector('.main-slider .slide.current'));
        transitionStart(curr);
    }

    function getNext() {
        let curr = document.querySelector('.main-slider .slide.current');
        let next = (curr.nextSibling) ? curr.nextSibling : document.querySelector('.slide');
        transitionOut(curr, next);
    }

    // get previous
    function getPrev() {
        let curr = document.querySelector('.main-slider .slide.current');
        let next = (curr.previousSibling) ? curr.previousSibling : document.querySelector('.slides').lastChild;
        transitionIn(curr, next);
    }
    //slide in
    function transitionIn(curr, next) {
        console.log('in')
        clearInterval(interval);
        curr.style.zIndex = 0;
        curr.classList.remove('current');
        next.style.display = 'block';
        next.style.zIndex = 1;
        next.classList.add('in', 'current');
        [...next.children].forEach(child => {
            child.classList.add('in');
        });
        setTimeout(() => {
            curr.style.display = 'none';
            next.classList.remove('in');
            [...next.children].forEach(child => {
                child.classList.remove('in');
            });
        },1000)
    }

    //slide out
    function transitionStart(curr) {
        clearInterval(interval);
        curr.style.zIndex = 1;
        curr.classList.add('in', 'current');
        curr.style.display = 'block';
        [...curr.children].forEach(child => {
            child.classList.add('in');
        });
        setTimeout(() => {
            curr.classList.remove('in');
            [...curr.children].forEach(child => {
                child.classList.remove('in');
            });
        },1000)
    }

    function transitionOut(curr, next) {
        console.log('out')
        clearInterval(interval);
        curr.style.zIndex = 1;
        curr.classList.add('out');
        curr.classList.remove('current');
        next.style.display = 'block';
        next.style.zIndex = 0;
        next.classList.add('current');
        [...curr.children].forEach(child => {
            child.classList.add('out');
        });
        setTimeout(() => {
            curr.style.display = 'none';
            curr.classList.remove('out');
            [...curr.children].forEach(child => {
                child.classList.remove('out');
            });
        },1000)
    }
</script>

<div class="slider">
    <!-- slides -->
    <div class="main-slider">
        <div class="slidesCount">
            <span>{currentNumber}</span>
            <span>/</span>
            <span class="all">{slides.length}</span>
        </div>
        <button data-cursor="Next" class="next" on:click|preventDefault={getNext}>next</button>
        <button data-cursor="Prev" class="previous"  on:click|preventDefault={getPrev}>prev</button>
        <div class="slides">
            {#each slides as slide, i}
                <div class="slide">
                    <figure class="cropped-image">
                        <img class="cover" src={slide.url} alt="Image{i}">
                    </figure>
                    <div class="slideInner">
                        <div class="slideContent">
                            <h2 class="slideHeading">{slide.title}</h2>
                            <a href="/" data-cursor="View" data-image={slide.preview} class="slideText">{slide.description}</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <!-- slides end -->
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .slider,
    .slides {
        height: 100%;
        width: 100%;
    }
    .main-slider .cover {
        object-fit: cover;
        width: 100% !important;
        height: 100%;
        left: 0;
    }
    .main-slider .cover {
        object-fit: cover;
        width: 100% !important;
        height: 100%;
        left: 0;
    }
    .main-slider img {
        top: -9999px;
        bottom: -9999px;
        right: 0;
        margin: auto;
        position: absolute !important;
        display: block;
        float: left;
        text-align: left;
        overflow-x: hidden;
    }
    .cropped-image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .cropped-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .main-slider {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }
    .slide {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        overflow: hidden;
        display: none;
    }

    :global(.slide.in) {
        z-index: 3;
        transform: translateX(-0%);
        -webkit-animation-duration: 1000ms;
        animation-duration: 1000ms;
        animation-name: slide-in;
        -webkit-animation-direction: alternate-reverse;
        -webkit-animation-timing-function: cubic-bezier(.82,0,.19,1);
        animation-timing-function: cubic-bezier(.82,0,.19,1);
    }

    :global(.cropped-image.in) {
        transform: translateX(0%);
        -webkit-animation-duration: 1000ms;
        animation-duration: 1000ms;
        -webkit-animation-name: slide-in-b;
        animation-name: slide-in-b;
        -webkit-animation-direction: alternate-reverse;
        -webkit-animation-timing-function: cubic-bezier(.82,0,.19,1);
        animation-timing-function: cubic-bezier(.82,0,.19,1);

    }

    :global(.slide.out) {
        transform: translateX(-0%);
        -webkit-animation-duration: 1000ms;
        animation-duration: 1000ms;
        animation-name: slide-in;
        -webkit-animation-direction: alternate;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-timing-function: cubic-bezier(.82,0,.19,1);
        animation-timing-function: cubic-bezier(.82,0,.19,1);
    }

    :global(.cropped-image.out) {
        transform: translateX(0%);
        -webkit-animation-duration: 1000ms;
        animation-duration: 1000ms;
        -webkit-animation-name: slide-in-b;
        animation-name: slide-in-b;
        -webkit-animation-direction: alternate;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-timing-function: cubic-bezier(.82,0,.19,1);
        animation-timing-function: cubic-bezier(.82,0,.19,1);
    }
    @keyframes slide-in {
        0% {
            transform: translateX(-0%);
        }
        100%  {
            transform: translateX(-100%);
        }
    }

    @keyframes slide-in-b {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }
    .next {
        position: absolute;
        right: 20px;
        top: 250px;
        z-index: 90;
        background: transparent;
        border: none;
    }
    .previous {
        position: absolute;
        left: 20px;
        top: 250px;
        z-index: 90;
        background: transparent;
        border: none;
    }
    .slideInner {
        width: 100%;
        height: 100%;
        overflow: hidden;

    }
    :global(.slide.current .slideInner) {
        opacity: 1;
        transition: all 1s ease-in-out;
    }
    .slidesCount {
        position: absolute;
        top: 20px;
        left: calc((100% * 3) / 12);
        z-index: 90;
    }
    .slideContent {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 10;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        opacity: 1;
    }
    :global(.slide.out .slideInner) {
        opacity: 0!important;
        transition: all 0.5s 0s ease-in-out;

    }
    :global(.slide.out + .current .slideInner) {
        opacity: 0!important;
        transition: all 0.5s 0s ease-in-out;

    }
    :global(.slide.in .slideInner) {
        opacity: 0 !important;
        transition: all 0.5s 1s ease-in-out;
    }

    :global(.slide.in + .current .slideInner) {
        opacity: 0 !important;
        transition: all 0.5s 1s ease-in-out;
    }
    .slideHeading {
        font-size: 154px;
        line-height: 153px;
        color: transparent;
        font-family: sans-serif;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: #fff;
        white-space: nowrap;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .slideText {
        font-size: 154px;
        line-height: 153px;
        color: rgba(255, 255, 255, .9);
        font-family: sans-serif;
        white-space: nowrap;
        text-align: center;
        margin: -85px 0 0;
        padding: 0;
        text-decoration: none;
        z-index: 9;
    }
</style>

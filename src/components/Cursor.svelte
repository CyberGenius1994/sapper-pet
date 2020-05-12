<script context="module">
    import { writable, derived } from 'svelte/store';
    import { spring } from 'svelte/motion';

    let hovered = false;

    const coords = spring({x: 0, y: 0}, {
        stiffness: 1, damping: 1
    });

    const coordsOuter = spring({x: 0, y: 0}, {
        stiffness: 0.1, damping: 0.7
    });

    const coordsImage = spring({x: 0, y: 0}, {
        stiffness: 0.3, damping: 0.9
    });



    function createCursorStore() {
        const { subscribe, update } = writable({x: 0, y: 0, text: ''});

        return {
            subscribe,
            setText: (event) => {
                return update(n => ({...n, text: event.target.getAttribute('data-cursor')}))
            },
            resetText: () => update(n => ({...n, text: ''})),
            setCoords: ({x, y}) => {
                coords.set({x, y});
                coordsOuter.set({x, y});
                return update(n => ({...n, x, y}));
            },
        };
    }

    function createImageStore() {
        const { subscribe, update } = writable({x: 0, y: 0, image: '', active: ''});
        return {
            subscribe,
            setImage: (event) => {
                return update(n => ({...n, active: true, image: event.target.getAttribute('data-image')}))
            },
            resetImage: () => update(n => ({...n, active: false})),
            setCoords: ({x, y}) => {
                coordsImage.set({x, y});
                return update(n => ({...n, x, y}));
            },
        };
    }

    const cursorStore = createCursorStore();
    const imageStore = createImageStore();

    export function useCursor() {
        document.addEventListener('mousemove', cursorStore.setCoords);
        document.querySelectorAll('[data-cursor]').forEach(el => {
            el.addEventListener('mouseenter', cursorStore.setText);
            el.addEventListener('mouseleave', cursorStore.resetText);
        });
    }
    export function useImage() {
        document.addEventListener('mousemove', imageStore.setCoords);
        document.querySelectorAll('[data-image]').forEach(el => {
            el.addEventListener('mouseenter', imageStore.setImage);
            el.addEventListener('mouseleave', imageStore.resetImage);
        });
    }
</script>

<script>
    import { onMount } from 'svelte';
    onMount( () => {
        useCursor();
        useImage();
    })
</script>

<div class="circle-cursor circle-cursor--inner"
     style="--mouse-x: {$coords.x}px; --mouse-y:{$coords.y}px;"
     class:hovered={$cursorStore.text.length > 1}>
    {#if $cursorStore.text.length > 1}
        {$cursorStore.text}
    {/if}
</div>
<div class="circle-cursor circle-cursor--outer"
     style="--mouses-x: {$coordsOuter.x}px; --mouses-y:{$coordsOuter.y}px;"
     class:hovered={$cursorStore.text.length > 1}>
</div>
<div class="imageBlock"
     style="--mousei-x: {$coordsImage.x}px; --mousei-y:{$coordsImage.y}px;"
     class:active={$imageStore.active === true}>
    <figure class="imageOuter">
        <img src={$imageStore.image} alt="image">
    </figure>
</div>

<style>
    :root {
        --color-text: #F23939;
        --color-cursor: #F23939;
        --dot-size: 8px;
        --dot-size-hovered: 75px;
        --outer-size: 28px;
        --outer-size-hovered: 105px;
        --text-size: 15px;
        --opacity: 0.2;
        --opacity-hovered: 1;
        --mouse-x: 0;
        --mouse-y: 0;
        --mouses-x: 0;
        --mouses-y: 0;
        --mousei-x: 0;
        --mousei-y: 0;
    }
    .circle-cursor {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        border-radius: 100%;
        transform-origin: 50% center;
        font-size: var(--text-size);
        z-index: 10;
    }
    .imageBlock {
        will-change: transform;
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: center center;
        transform:translate3d(var(--mousei-x), var(--mousei-y), 0px) translate(-50%, -50%);
        opacity: 0;
        visibility: hidden;
        transition: clip-path 0s 1s;
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    .imageBlock.active {
        opacity: 1;
        visibility: visible;
        z-index: 111;
        transition: clip-path 1s;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    }
    .circle-cursor.circle-cursor--inner {
        will-change: transform;
        width: var(--dot-size);
        height: var(--dot-size);
        z-index: 1000;
        background: var(--color-cursor);
        color: var(--color-text);
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-align: center;
        transform-origin: center center;
        transform:translate3d(var(--mouse-x), var(--mouse-y), 0px) translate(-50%, -50%);
        transition: width 0s ease-in-out, height 0s ease-in-out;
    }
    .circle-cursor.circle-cursor--inner.hovered {
        width: var(--dot-size-hovered);
        height: var(--dot-size-hovered);
        background: transparent;
        transition: width .2s ease-in-out, height .2s ease-in-out;
    }
    .circle-cursor.circle-cursor--outer {
        will-change: transform;
        width: var(--outer-size);
        height: var(--outer-size);
        border: 1px solid var(--color-cursor);
        z-index: 1200;
        opacity: 0.2;
        transform-origin: center center;
        transform:translate3d(var(--mouses-x), var(--mouses-y), 0px) translate(-50%, -50%);
        transition: width .2s ease-in-out, height .2s ease-in-out;
    }
    .circle-cursor.circle-cursor--outer.hovered {
        width: var(--outer-size-hovered);
        height: var(--outer-size-hovered);
        background: transparent;
        opacity: 1;
        transition: width .2s ease-in-out, height .2s ease-in-out;
    }
</style>

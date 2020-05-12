<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import {  deferredTransition } from './deferredTransition.js';
    import { useCursor, useImage } from "../components/Cursor.svelte";
    export let ready;

    onMount(()=>ready=true);

	let projects = [
		{
		    name: 'blade', 
			image: './img/pavel.jpg'
		},
        {
            name: 'artbat',
            image: './img/pavel.jpg'
        },
        {
            name: 'divine',
            image: './img/pavel.jpg'
        },
        {
            name: 'kyivteploenergo',
            image: './img/pavel.jpg'
        },
        {
            name: 'bohemia',
            image: './img/pavel.jpg'
        },
        {
            name: 'CD’9',
            image: './img/pavel.jpg'
        },
		{
            name: 'TFL',
            image: './img/pavel.jpg'
        },
	];
</script>

{#if ready}
	<div class="projectsOuter" id="cases">
		<ul class="projects">
			{#each projects as project, i}
				<li class="project" transition:fly="{{y:200, duration: 500 + i*100}}" use:deferredTransition>
	                <a href="/" data-image={project.image} data-cursor="Show">
		                {project.name}
	                </a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	:root {
		--position-x: 0;
		--position-y: 0;
	}
    :global(.hidden){
        visibility: hidden;
    }
	.projectsOuter {
        width: 100%;
		z-index: 9;
        padding: 10px 0 0 calc((100% / 12) * 4 );
        background: #110f11;
		min-height: 100vh;
    }
    .projects {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 100%;
    }
    .projects a {
        text-decoration: none;
        font-size: 100px;
        line-height: 1;
        color: #eaeaea;
        font-family: sans-serif;
        -webkit-text-stroke-width: 0;
        -webkit-text-stroke-color: #eaeaea;
        position: relative;
        z-index: 110;
        cursor: none;
        text-transform: uppercase;
	    letter-spacing: -0.05em;
    }
    .projects a:hover {
        -webkit-text-stroke-width: 1px;
        -webkit-text-fill-color: transparent;
	    z-index: 112;
    }
</style>

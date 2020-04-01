<script>
	let projects = [
	    'blade',
        'artbat',
        'divine',
        'divine',
        'kyivteploenergo',
        'bohemia',
        'CD’9',
        'TFL',
	];

	let cursorText = '';


    function textEnter(event) {
        cursorText = event.target.getAttribute('data-cursor');
    }

    function textLeave() {
        cursorText = '';
    }

    $: console.log(cursorText);

</script>

<div class="projectsOuter" id="cases">
	<ul class="projects">
		{#each projects as project}
			<li class="project">
                <a on:mouseenter={event => textEnter(event)} on:mouseleave={() => textLeave()} href="/" data-cursor="View">{project}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.projectsOuter {
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
		z-index: 9;
        padding: 10px 0 0 25%;
        background: #000;
    }
    .projects {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow-y: auto;
        height: 100%;
    }
    .projects a {
        text-decoration: none;
        font-size: 100px;
        line-height: 1;
        color: #eaeaea;
        font-family: sans-serif;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #eaeaea;
        position: relative;
        z-index: 110;
        cursor: none;
        text-transform: uppercase;
	    letter-spacing: -0.05em;
    }
    .projects a:hover {
        -webkit-text-fill-color: transparent;
    }
</style>

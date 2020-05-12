<script>
	import Nav from './Nav.svelte'
	import Icons from './Icons.svelte'

</script>
<Icons/>
<header class="appHeader">
	<div class="brand">
        <a href="/" class="logo">
            <svg viewBox="0 0 237 30">
	            <use href="#Logo"/>
            </svg>
        </a>
	</div>
    <Nav/>
</header>

<style>
	.appHeader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
		z-index: 999;
        display: flex;
        align-items: flex-start;
        align-content: center;
        justify-content: space-between;
        padding: 20px;
		mix-blend-mode: difference;
	}
	.brand {
        flex-basis: calc((100%/12)*2);
	}
	.logo {
        width: 100%;
        display: flex;
        color: var(--navigation-color);
	}
	.logo svg {
		max-width: 237px;
        width: 100%;
        height: auto;
        display: flex;
	}
</style>

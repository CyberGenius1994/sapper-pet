<script>
	import Nav from './Nav.svelte'
	import Icons from './Icons.svelte'
	let logo = '../img/logo.svg';

</script>
<Icons/>
<header class="appHeader">
	<div class="brand">
        <a href="/" class="logo">
            <svg width="237" height="30">
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
	}
	.logo {
        color: var(--main-color);
	}
</style>

<script>
	export let segment;
</script>

<style>
	nav {
		flex-basis: calc((100% / 12) * 4 );
		font-weight: 300;
		padding: 0;
	}

	ul {
		margin: 0;
		padding: 0 0 0 20px;
        display: flex;
        width: 100%;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: flex-start;
	}
	li.navigationItem {
        flex-basis: calc((100% - 20px)/4);
		display: inline-flex;
	}
    li.navigationItem.halfItem {
        flex-basis: calc((100% - 20px)/2);
    }

	a {
		text-decoration: none;
		padding: 0;
		display: block;
        color: var(--main-color);
	}
</style>

<nav>
	<ul>
		<li class="navigationItem halfItem">
			<a href='#cases'>CASES</a>
		</li>
		<li class="navigationItem">
			<a rel=prefetch aria-current='{segment === "studio" ? "page" : undefined}' href='studio'>STUDIO</a>
		</li>
		<li class="navigationItem">
			<a rel=prefetch aria-current='{segment === "contacts" ? "page" : undefined}' href='contacts'>CONTACTS</a>
		</li>
	</ul>
</nav>

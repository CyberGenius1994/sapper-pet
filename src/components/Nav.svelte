<script>
	export let segment;
</script>
<nav>

    <ul>
        <li class="navigationItem halfItem">
            <a data-cursor="GO" class="navigationItemLink" href='#cases'>CASES</a>
        </li>
        <li class="navigationItem">
            <a data-cursor="GO" class="navigationItemLink" class:active={segment === "studio"}  rel=prefetch aria-current='studio' href='/studio'>STUDIO</a>
        </li>
        <li class="navigationItem">
            <a data-cursor="GO" class="navigationItemLink" class:active={segment === "contacts"}  rel=prefetch aria-current='contacts' href='/contacts'>CONTACTS</a>
        </li>
    </ul>
</nav>

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
	.navigationItemLink {
        display: inline-block;
        position: relative;
        top: 0;
        font-size: var(--main-font-size);
        font-family: 'HelveticaNeueCyr', sans-serif;
        font-weight: 400;
        text-decoration: none;
        overflow: hidden;
        text-transform: uppercase;
        color: var(--navigation-color);
        transition: color 300ms 300ms ease-in-out;
        padding-bottom: 1px;
    }
    .navigationItemLink::before {
        display: block;
        position: absolute;
        content: "";
        top: calc(100% - 1px);
        left: 0;
        width: 200%;
        height: 1px;
        text-transform: uppercase;
        background: linear-gradient(90deg, transparent 0%, transparent 50% var(--navigation-color) 50%, var(--navigation-color) 100%);
        transition: left 500ms ease-in-out;
    }
    .navigationItemLink:hover::before {
        left: 100%;
	}
</style>



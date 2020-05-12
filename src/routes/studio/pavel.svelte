<script>
    import Cursor, { useCursor } from "../../components/Cursor.svelte";
    import Header from "../../components/Header.svelte";

</script>

<svelte:head>
	<title>Pavel</title>
</svelte:head>

<div class="wrapper studio">
	<Cursor/>
    <Header/>
	<main class="userPage">

	</main>
</div>

<style>
	.studio {
        --main-color: #fff;
        --accent-color: #F65E08;
        --second-color: #eaeaea;
        --navigation-color: #171718;
        --title-font-size: 100px;
	}

</style>

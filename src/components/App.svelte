<script>
    import Cursor, { useCursor } from "./Cursor.svelte";

    import Projects from "./Projects.svelte";
    import Header from "./Header.svelte";

</script>

<svelte:head>
    <title>Looksgreat</title>
</svelte:head>

<div use:useCursor class="wrapper">
    <Cursor/>
    <Header/>
    <main class="page">
        <div class="slider">
            slider
            <a href="mailto:perl.php.c@gmail.com" data-cursor="Написать">perl.php.c@gmail.com</a>
            <a href="mailto:perl.php.c@gmail.com" data-cursor="Ghjlfnb">perl.php.c@gmail.com</a>
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
        --position-x: 0px;
        --position-y: 0px;
    }
    :global(::selection) {
        background: transparent;
    }
    :global(a) {
        cursor: none;
    }
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr-Roman'),
        url('./static/fonts/hinted-HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('./static/fonts/hinted-HelveticaNeueCyr-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .wrapper {
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .page {
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .slider {
        width: 100%;
        height: 100vh;
        background: #333333;
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



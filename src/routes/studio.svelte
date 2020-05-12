<script>
    import Cursor, { useCursor } from "../components/Cursor.svelte";
    import Header from "../components/Header.svelte";
    let segment = 'studio';
    const workers = ['pavel', 'dima', 'mykola', 'name']
</script>

<svelte:head>
	<title>Studio</title>
</svelte:head>

<div class="wrapper studio">
	<Cursor/>
    <Header/>
	<main class="studioContent">
		<div class="studioContentOuter">
            <h1 class="pageName">About</h1>
            <div class="info">
                <h2 class="infoTitle">Подход</h2>
                <p class="infoDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br> commodo ligula eget dolor. Aenean massLorem <br> ipsum dolor sit amet, consectetuer <br> adipiscing elit.</p>
            </div>
            <div class="practice">
                Области нашей деятельности: <br> Брендинг, WEB, UI/UX
            </div>
            <ul class="workersList">
				{#each workers as worker}
                    <li class="worker">
                        <a href="/" data-cursor="View">{worker}</a>
                    </li>
				{/each}
            </ul>
		</div>
		<div class="mapOuter">
            <h2 class="mapTitle">CLIENT MAP</h2>
			<figure class="imageOuter">
                <img class="imageMap" src="../img/map.svg" alt="">
			</figure>
		</div>
		<div class="socialOuter">
			<p class="socialTest">
                <a target="_blank" href="https://www.behance.net/prannychuk">BEHANCE</a>
				<span>&</span>
                <a target="_blank" href="https://dribbble.com/pacorasson">DRIBBBLE</a>
			</p>
		</div>
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
    .studio {
        background: var(--second-color);
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
	.studioContent {
        display: block;
        padding-top: 10px;
	}
	.studioContentOuter {
        width: 100%;
	}
	.pageName {
        text-transform: uppercase;
        color: #292929;
        font-size: var(--main-font-size);
        font-weight: 400;
        opacity: .5;
        margin-left: calc((100% / 12) * 4 );
	}
	.info {
        display: flex;
        padding-top: 150px;
        margin-bottom: 90px;
	}
	.infoTitle {
        margin-left: calc((100% / 12) * 2 );
        width: calc((100% / 12) * 2 );
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        color: #292929;
	}
	.infoDescription {
        font-size: 15px;
        line-height: 22px;
        color: #292929;
        flex: 0 0 calc((100% / 12) * 4 );
	}
	.practice {
        align-self: flex-start;
        text-align: right;
        width: calc((100% / 12) * 2 );
        font-size: 15px;
        line-height: 22px;
        color: #292929;
        margin-left: calc((100% / 12) * 5 );
	}
    .workersList {
        list-style-type: none;
        margin: 50px 0 0 calc((100% / 12) * 4 );
        height: 100%;
        padding: 50px 0 0 0;
    }
    .workersList a {
        text-decoration: none;
        font-size: 100px;
        line-height: 1;
        color: #292929;
        font-family: sans-serif;
        -webkit-text-stroke-width: 0;
        -webkit-text-stroke-color: #292929;
        position: relative;
        z-index: 110;
        cursor: none;
        text-transform: uppercase;
        letter-spacing: -0.05em;
    }
    .workersList a:hover {
        -webkit-text-stroke-width: 1px;
        -webkit-text-fill-color: transparent;
    }
	.mapOuter {
        margin-top: 216px;
	}
	.mapTitle {
        font-size: 15px;
        line-height: 15px;
        color: #6B6B6B;
        width: calc((100% / 12) * 2 );
        margin: 0 0 0 calc((100% / 12) * 2 );
        font-weight: 400;
        letter-spacing: -0.05em;
        text-transform: uppercase;
	}
	.imageOuter {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin: 0 0 150px 0;
        width: 100%;
	}
	.imageMap {
        max-width: 100%;
	}
	.socialOuter {
        padding-left: calc((100% / 12) * 4 );
	}
	.socialTest span {
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
        padding-bottom: 1px;
	}
    .socialTest a {
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
    .socialTest a::before {
        display: block;
        position: absolute;
        content: "";
        top: calc(100% - 1px);
        left: -200%;
        width: 300%;
        height: 1px;
        text-transform: uppercase;
        background: linear-gradient(90deg, var(--navigation-color) 0%, var(--navigation-color) 33%, transparent 33%, transparent 66%, var(--navigation-color) 66%, var(--navigation-color) 100%);
        transition: left 500ms ease-in-out;
    }
    .socialTest a:hover::before {
        left: 0;
    }
</style>

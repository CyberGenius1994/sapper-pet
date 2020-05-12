<script>
    import Cursor, { useCursor } from "../components/Cursor.svelte";
    import Header from '../components/Header.svelte';
    let segment = 'contacts';
    const offices = [
        {
            name: 'KYIV',
            worker: '',
            email: 'looksgreat@kiev.com',
            phone: '+38 (093) 05 30 831',
            address: ''
        },
        {
            name: 'NEW YORK',
            worker: 'Sabo Dmitry',
            email: 'looksgreat@new-yok.com',
            phone: '+1 917-651-1533',
            address: '19W 21 st St, New York, NY'
        },
    ]
</script>

<svelte:head>
    <title>Contacts</title>
</svelte:head>

<div class="wrapper contacts">
    <Cursor/>
    <Header/>
    <main class="contactsContent">
        <div class="contactsContentOuter">
            <h1 class="pageName">About</h1>
        </div>
        <ul class="OfficesList">
            {#each offices as office}
                <li class="office">
	                <span class="officeName">{office.name}</span>
                    <p class="worker">{office.worker}</p>
                    <a href="/" data-cursor="Write">{office.email}</a>
                    <a href="/" data-cursor="Copy">{office.phone}</a>
                    <p class="address">{office.address}</p>
                </li>
            {/each}
        </ul>
    </main>
</div>

<style>
    :root {
        --main-color: #fff;
        --accent-color: #F65E08;
        --navigation-color: #EAEAEA;
        --second-color: #EAEAEA;
        --countdown-font-size: 200px;
        --title-font-size: 100px;
        --main-font-size: 15px;
        --color-cursor: #F23939;
    }
    .contacts {
        background: #110f11;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .pageName {
        text-transform: uppercase;
        color: #6B6B6B;
        font-size: var(--main-font-size);
        font-weight: 400;
        opacity: .5;
        margin-left: calc((100% / 12) * 4 );
    }
    .contactsContent {
        display: block;
        padding-top: 10px;
    }
    .worker:empty,
    .address:empty {
        display: none;
    }
    .OfficesList {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        margin: 0 0 0 calc((100% / 12) * 4 );
    }
    .office {
        display: inline-flex;
        flex-direction: column;
    }
    .office a {
        display: inline-flex;
        align-self: flex-start;
    }
</style>

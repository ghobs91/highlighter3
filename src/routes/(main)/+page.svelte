<script lang="ts">
    import Console from '$lib/components/Console.svelte';
    import { page } from '$app/stores';
    import Navbar from './(navbar)/components/Navbar.svelte';

    let url: string = $page.url.searchParams.get('url') || '';
    let authorPubkey: string = $page.url.searchParams.get('author') || '';
</script>

<svelte:head>
	<title>Highlighter Console</title>
	<meta name="description" content="Unleash valuable words from their artificial silos" />
</svelte:head>

<Navbar/>
<main class="pb-32 flex flex-col items-center gap-6">
    <Console {url} {authorPubkey} />
</main>
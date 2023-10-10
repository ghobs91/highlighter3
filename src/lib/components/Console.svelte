<script lang="ts">
    import { goto } from '$app/navigation';

    let knowAuthorPubkey = false;
    export let url: string | null = null;
    export let authorPubkey: string | null = null;

    function load() {
        if (!url) return;

        const midUrlEventMatcher = /\/(naddr|nevent|note)*1([a-zA-Z0-9]+)\/?$/i;

        if (
            url.startsWith('naddr1') ||
            url.startsWith('nevent1') ||
            url.startsWith('note1')
        ) {
            goto(`/a/${encodeURIComponent(url)}`);
            return;
        } else if (url.match(midUrlEventMatcher)) {
            // extract from url the naddr to the end of the string which can be of any length and remove
            // the leading slash
            try {
                let naddr = url.match(midUrlEventMatcher)![0].slice(1);

                goto(`/a/${encodeURIComponent(naddr)}`);
                return;
            } catch (e) {
            }
        }

        let loadUrl = `/load?url=${encodeURIComponent(url)}`;
        if (authorPubkey) {
            loadUrl += `&author=${encodeURIComponent(authorPubkey)}`;
        }

        goto(loadUrl);
    }

    function setValue(e) {
        url = e.target.attributes.href.value;

        setTimeout(load, 1000);
    }
</script>

<div class="flex flex-col items-center gap-6 w-full">
    <p class="text-zinc-800 text-2xl mb-4 font-semibold">
        Enter a URL from any website to search for snapshots.
    </p>

    <div class="flex flex-row gap-4 w-full">
        <input type="text" class="
            bg-white
            rounded-lg shadow
            w-full
            p-4
            border-0
            text-xl
            font-mono
        " placeholder="naddr or URL (e.g. https://medium.com/....)" bind:value={url}>

        <button class="
            bg-primary-500 hover:bg-primary-600
            text-white font-semibold
            px-6 py-2
            transition-colors duration-200
            text-xl
            rounded-xl
            uppercase
        " on:click={load}>Load</button>
    </div>
</div>
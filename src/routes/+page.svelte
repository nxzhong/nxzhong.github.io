<script>
    import { onMount } from 'svelte';

    function typewriter(node, { speed = 0.2 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

    let visible = false;
    onMount(() => {
        visible = true;
    })
</script>
<svelte:head> 
    <title>Nick Zhong</title>
</svelte:head>

<div class="container py-6 my-72">
    {#if visible}
	<h1 transition:typewriter class='text-center text-4xl'>
		Coming Soon...
    </h1>
{/if}
</div>

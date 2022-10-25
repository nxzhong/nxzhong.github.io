<script>
	import '../app.postcss';
	import '../app.postcss';
	import Heading from '../components/Heading.svelte';
	import Footing from '../components/Footing.svelte';
</script>

<Heading />
<main class="bg-white border-y border-zinc-200 font-mono">
	<slot />
</main>

<Footing />

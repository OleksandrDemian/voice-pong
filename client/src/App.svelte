<script>
	import { listen, addListener } from "./audio/processor";
	import Canvas from "./Canvas.svelte";

	let volume = 0;

	addListener(value => {
		volume = value;
	});

	listen();
</script>

<main>
	<h1>Noise: {volume}!</h1>
	<Canvas />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
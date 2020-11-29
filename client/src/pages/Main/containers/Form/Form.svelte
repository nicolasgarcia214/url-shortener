<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()
</script>

<form on:submit|preventDefault={() => dispatch('create')}>
	<slot />
</form>

<style>
	form{
		width: 80%;
		display: flex;
		font-family: "Banana Grotesk";
        color: #F1FAEE;
        flex-direction: column;
	}
</style>

<script>
	import Nav from '../components/Nav.svelte';

	import bg from 'images/bg.jpg'

	// export let segment;
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
</svelte:head>

<Nav/>
<main class="body" style={`background-image: url(${bg})`}>
	<slot></slot>
</main>

<style>
	.body {
		background-repeat: repeat-y;
		background-size: contain;
	}
</style>

<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MatrixRain from '$lib/components/MatrixRain.svelte';
</script>

<Navbar />
<MatrixRain />
<slot />
<Footer />

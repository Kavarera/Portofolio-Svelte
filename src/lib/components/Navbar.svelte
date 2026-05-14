<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	/** @type {boolean} */
	let menuOpen = false;
	/** @type {boolean} */
	let scrolled = false;

	/** @type {() => void} */
	let handleScroll;

	onMount(() => {
		if (!browser) return;
		handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class:scrolled>
	<div class="nav-inner">
		<a class="brand" href="#home" on:click={closeMenu}>Kavarera</a>

		<button class="hamburger" aria-label="Toggle navigation" on:click={toggleMenu}>
			<span class:open={menuOpen}></span>
			<span class:open={menuOpen}></span>
			<span class:open={menuOpen}></span>
		</button>

		<ul class:open={menuOpen}>
			<li><a href="#home"        class="nav-link" on:click={closeMenu}>Home</a></li>
			<li><a href="#about"       class="nav-link" on:click={closeMenu}>About</a></li>
			<li><a href="#experiences" class="nav-link" on:click={closeMenu}>Experience</a></li>
			<li><a href="#projects"    class="nav-link" on:click={closeMenu}>Projects</a></li>
			<li><a href="#contact"     class="nav-link" on:click={closeMenu}>Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--medium-gray);
		transition: all 0.3s ease;
	}

	nav.scrolled {
		background: rgba(0, 0, 0, 0.98);
		box-shadow: 0 2px 20px rgba(0, 255, 255, 0.1);
	}

	nav:hover {
		box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2);
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
	}

	/* Brand */
	.brand {
		font-family: 'Orbitron', monospace;
		font-size: 2rem;
		font-weight: 900;
		text-decoration: none;
		background: linear-gradient(
			90deg,
			rgba(255,255,255,0.8) 0%,
			rgba(0,255,255,0.6) 25%,
			rgba(255,255,255,1) 50%,
			rgba(0,255,255,0.6) 75%,
			rgba(255,255,255,0.8) 100%
		);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-position: -200% center;
		animation: shineLoop 5s infinite;
		transition: all 0.3s ease;
	}

	.brand:hover {
		animation: shineText 1.5s infinite;
		transform: scale(1.05);
	}

	/* Nav links */
	ul {
		list-style: none;
		display: flex;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		font-family: 'Rajdhani', monospace;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--accent-white);
		text-decoration: none;
		padding: 0.5rem 0.75rem;
		position: relative;
		transition: color 0.3s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -2px;
		left: 50%;
		background: var(--neon-glow);
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}

	.nav-link:hover::after { width: 100%; }
	.nav-link:hover {
		color: var(--neon-glow);
		text-shadow: 0 0 10px var(--neon-glow);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}

	.hamburger span {
		display: block;
		width: 26px;
		height: 2px;
		background: var(--accent-white);
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
	.hamburger span.open:nth-child(2) { opacity: 0; }
	.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

	/* Mobile */
	@media (max-width: 768px) {
		.hamburger { display: flex; }

		ul {
			position: absolute;
			top: 70px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: rgba(0, 0, 0, 0.98);
			border-bottom: 1px solid var(--medium-gray);
			padding: 1rem 0;
			gap: 0;
			display: none;
		}

		ul.open { display: flex; }

		.nav-link {
			display: block;
			padding: 0.75rem 1.5rem;
			font-size: 1.3rem;
		}

		.brand { font-size: 1.6rem; }
	}
</style>

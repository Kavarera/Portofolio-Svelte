<script>
	import { onMount } from 'svelte';

	const name = 'Rafli Iskandar Kavarera';

	/** @type {HTMLHeadingElement} */
	let headingEl;

	onMount(() => {
		if (!headingEl) return;
		headingEl.textContent = '';
		headingEl.style.borderRight = '2px solid #00ffff';

		let i = 0;
		const timer = setInterval(() => {
			if (i < name.length) {
				headingEl.textContent += name.charAt(i);
				i++;
			} else {
				clearInterval(timer);
				setTimeout(() => {
					headingEl.style.borderRight = 'none';
				}, 1000);
			}
		}, 80);

		return () => clearInterval(timer);
	});
</script>

<section id="home" class="masthead">
	<div class="container">
		<!-- Profile image with glitch overlays -->
		<div class="profile-container">
			<div class="glitch-wrapper">
				<img class="imgProfile" src="/img/jogja-min.jpg" alt="Rafli Iskandar Kavarera" loading="eager" />
				<div class="glitch-overlay glitch-overlay-1"></div>
				<div class="glitch-overlay glitch-overlay-2"></div>
				<div class="glitch-overlay glitch-overlay-3"></div>
			</div>
		</div>

		<!-- Name — typewriter runs on client -->
		<h1 bind:this={headingEl} class="masthead-heading">{name}</h1>

		<h4>Full Stack Developer &amp; Mobile Engineer</h4>

		<!-- Social links -->
		<div class="sosmed">
			<a class="sosmed-item" href="https://www.github.com/Kavarera" target="_blank" rel="noopener noreferrer">
				<div class="list-sosmed">
					<i class="fab fa-github sosmed-logo"></i>
					GitHub
				</div>
			</a>
			<a class="sosmed-item" href="https://www.instagram.com/r_kavarera" target="_blank" rel="noopener noreferrer">
				<div class="list-sosmed">
					<i class="fab fa-instagram sosmed-logo"></i>
					Instagram
				</div>
			</a>
			<a class="sosmed-item" href="https://www.linkedin.com/in/kavarera" target="_blank" rel="noopener noreferrer">
				<div class="list-sosmed">
					<i class="fab fa-linkedin sosmed-logo"></i>
					LinkedIn
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.masthead {
		min-height: 100vh;
		background: var(--gradient-secondary);
		padding: 6rem 0;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	/* Grid background */
	.masthead::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
		opacity: 0.1;
		pointer-events: none;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: relative;
		z-index: 1;
	}

	/* Profile */
	.profile-container {
		position: relative;
		display: inline-block;
		margin-bottom: 2rem;
	}

	.glitch-wrapper {
		position: relative;
		display: inline-block;
	}

	.imgProfile {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid var(--neon-glow);
		box-shadow: 0 0 30px var(--soft-glow), inset 0 0 30px rgba(0,255,255,0.1);
		animation: float 6s ease-in-out infinite, glitchProfile 8s infinite, pulseGlow 3s ease-in-out infinite alternate;
		position: relative;
		z-index: 2;
		transition: all 0.3s ease;
	}

	.imgProfile::before,
	.imgProfile::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: inherit;
		z-index: -1;
	}

	.imgProfile::before {
		background: linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.3) 50%, transparent 70%);
		animation: glitchLayer1 4s infinite;
		mix-blend-mode: multiply;
	}

	.imgProfile::after {
		background: linear-gradient(-45deg, transparent 30%, rgba(0, 255, 255, 0.3) 50%, transparent 70%);
		animation: glitchLayer2 3s infinite;
		mix-blend-mode: screen;
	}

	.imgProfile:hover {
		box-shadow: 0 0 50px var(--neon-glow), inset 0 0 50px rgba(0,255,255,0.2);
		transform: scale(1.05);
		animation-duration: 0.1s, 0.2s, 1s;
	}

	.glitch-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		pointer-events: none;
		z-index: 3;
	}

	.glitch-overlay-1 {
		background: linear-gradient(90deg, transparent 0%, rgba(255,0,100,0.4) 20%, transparent 40%, rgba(0,255,255,0.4) 60%, transparent 80%);
		animation: scanLines1 2s infinite;
		mix-blend-mode: color-dodge;
	}

	.glitch-overlay-2 {
		background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px);
		animation: scanLines2 3s infinite reverse;
		mix-blend-mode: overlay;
	}

	.glitch-overlay-3 {
		background: radial-gradient(circle, transparent 30%, rgba(0,255,255,0.2) 50%, transparent 70%);
		animation: digitalNoise 1.5s infinite;
		mix-blend-mode: screen;
	}

	.profile-container:hover .imgProfile {
		animation-duration: 0.1s, 0.15s, 0.8s;
	}

	.profile-container:hover .glitch-overlay-1 { animation-duration: 0.3s; }
	.profile-container:hover .glitch-overlay-2 { animation-duration: 0.4s; }
	.profile-container:hover .glitch-overlay-3 { animation-duration: 0.2s; }

	/* Heading */
	.masthead-heading {
		font-family: 'Orbitron', monospace;
		font-weight: 700;
		font-size: clamp(1.6rem, 4vw, 3rem);
		text-transform: uppercase;
		margin-bottom: 1rem;
		text-shadow: 0 0 20px rgba(255,255,255,0.5);
		animation: fadeInUp 1s ease-out;
		min-height: 1.2em;
	}

	h4 {
		font-family: 'Rajdhani', sans-serif;
		font-weight: 300;
		font-size: 1.5rem;
		color: var(--neon-glow);
		animation: fadeInUp 1s ease-out 0.2s both;
		margin-bottom: 2rem;
	}

	/* Social links */
	.sosmed {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		animation: fadeInUp 1s ease-out 0.4s both;
	}

	.sosmed-item {
		color: var(--accent-white);
		text-decoration: none;
		font-weight: 500;
		display: flex;
		align-items: center;
		transition: color 0.3s ease;
	}

	.sosmed-item:hover { color: var(--neon-glow); }
	.sosmed-item:hover .sosmed-logo {
		filter: brightness(0) invert(1) sepia(1) hue-rotate(180deg) saturate(5);
	}

	.list-sosmed {
		background: var(--gradient-secondary);
		border: 1px solid var(--medium-gray);
		border-radius: 10px;
		padding: 1rem 1.5rem;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.list-sosmed::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent);
		transition: left 0.5s ease;
	}

	.list-sosmed:hover::before { left: 100%; }

	.list-sosmed:hover {
		border-color: var(--neon-glow);
		box-shadow: 0 5px 20px var(--soft-glow);
		transform: translateY(-5px);
	}

	.sosmed-logo {
		font-size: 1.3rem;
		filter: brightness(0) invert(1);
		transition: all 0.3s ease;
	}

	@media (max-width: 576px) {
		.imgProfile { width: 180px; height: 180px; }
		.list-sosmed { padding: 0.75rem 1rem; }
	}
</style>

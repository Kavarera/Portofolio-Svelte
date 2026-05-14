<script>
	import { onMount } from 'svelte';
	import ExperienceItem from './ExperienceItem.svelte';

	/** @type {import('$lib/features/portfolio/types.js').Experience[]} */
	export let experiences;

	/** @type {HTMLDivElement} */
	let timelineEl;

	/** Svelte action: IntersectionObserver for scroll-in animation */
	/** @param {HTMLElement} node */
	function scrollReveal(node) {
		node.style.opacity = '0';
		node.style.transform = 'translateY(50px)';
		node.style.transition = 'all 0.8s ease';

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<section id="experiences" class="experiences-section">
	<div class="container">
		<h2>Professional Experience</h2>
		<div class="timeline-container" bind:this={timelineEl}>
			{#each experiences as experience (experience.id)}
				<div use:scrollReveal>
					<ExperienceItem {experience} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.experiences-section {
		background: var(--primary-black);
		min-height: 100vh;
		padding: 5rem 0;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	h2 {
		font-family: 'Orbitron', monospace;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		color: var(--neon-glow);
		text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
		text-align: center;
		margin-bottom: 3rem;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.timeline-container {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Center vertical line */
	.timeline-container::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 100%;
		background: linear-gradient(180deg, transparent 0%, var(--neon-glow) 10%, var(--neon-glow) 90%, transparent 100%);
		box-shadow: 0 0 10px var(--neon-glow);
		z-index: 0;
	}

	@media (max-width: 768px) {
		.timeline-container::before {
			left: 20px;
		}

		.timeline-container {
			padding: 0 10px;
		}
	}
</style>

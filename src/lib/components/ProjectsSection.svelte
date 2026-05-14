<script>
	import ProjectCard from './ProjectCard.svelte';

	/** @type {import('$lib/features/portfolio/types.js').Project[]} */
	export let projects;

	/** Svelte action: IntersectionObserver scroll-reveal for cards */
	/** @param {HTMLElement} node */
	function cardReveal(node) {
		node.style.opacity = '0';
		node.style.transform = 'translateY(50px)';
		node.style.transition = 'all 0.6s ease';

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
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<section id="projects" class="projects-section">
	<div class="container">
		<h1>Featured Projects</h1>

		<div class="projects-grid">
			{#each projects as project (project.id)}
				<div class="card-wrapper" use:cardReveal>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>

		<div class="view-more">
			<p>Interested in seeing more of my work?</p>
			<a href="https://github.com/Kavarera" class="btn-futuristic" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-github"></i> View All Projects on GitHub
			</a>
		</div>
	</div>
</section>

<style>
	.projects-section {
		padding: 5rem 0;
		background: var(--gradient-primary);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	h1 {
		font-family: 'Orbitron', monospace;
		font-size: clamp(1.8rem, 4vw, 3rem);
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		text-shadow: 0 0 20px rgba(255,255,255,0.3);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.card-wrapper {
		display: flex;
		flex-direction: column;
	}

	.view-more {
		text-align: center;
		margin-top: 3rem;
	}

	.view-more p {
		color: #cccccc;
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	@media (max-width: 992px) {
		.projects-grid { grid-template-columns: repeat(2, 1fr); }
	}

	@media (max-width: 600px) {
		.projects-grid { grid-template-columns: 1fr; }
	}
</style>

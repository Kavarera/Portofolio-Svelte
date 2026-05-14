<script>
	/** @type {import('$lib/features/portfolio/types.js').Project} */
	export let project;

	/**
	 * Build action buttons for a project.
	 * Bug fix: single-github link was passing the entire array to href.
	 * Now always uses individual links.
	 * @param {import('$lib/features/portfolio/types.js').ProjectLinks} links
	 */
	function getGithubLinks(links) {
		if (!links.github) return [];
		return links.github; // always an array per type definition
	}
</script>

<!-- Svelte action for scroll reveal applied by parent -->
<div class="project-card">
	<img
		src="/{project.image}"
		alt={project.title}
		class="card-image"
		loading="lazy"
	/>
	<div class="card-body">
		<h4 class="card-title">{project.title}</h4>
		<p class="card-text">{project.description}</p>

		<div class="tech-tags">
			{#each project.technologies as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>

		<div class="developer-info">
			<small>
				Developed by:
				{#each project.developers as dev, i}
					<a href={dev.link} class="dev-link" target="_blank" rel="noopener noreferrer">
						{dev.name}{dev.role ? ` (${dev.role})` : ''}
					</a>{#if i < project.developers.length - 1}, {/if}
				{/each}
			</small>
		</div>

		<div class="project-actions">
			{#if project.links.demo}
				<a href={project.links.demo} class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fas fa-play"></i> Demo
				</a>
			{/if}

			{#each getGithubLinks(project.links) as link, i}
				<a href={link} class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-github"></i>
					{project.links.github && project.links.github.length > 1 ? `GitHub ${i + 1}` : 'GitHub'}
				</a>
			{/each}

			{#if project.links.download1}
				<a href={project.links.download1} class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fas fa-download"></i> Download
				</a>
			{/if}

			{#if project.links.download2}
				<a href={project.links.download2} class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fas fa-download"></i> Mirror
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.project-card {
		background: var(--gradient-secondary);
		border: 1px solid var(--medium-gray);
		border-radius: 15px;
		overflow: hidden;
		transition: all 0.3s ease;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.project-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, transparent 0%, rgba(0,255,255,0.05) 50%, transparent 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover::before { opacity: 1; }

	.project-card:hover {
		border-color: var(--neon-glow);
		box-shadow: 0 10px 30px rgba(0,255,255,0.2);
		transform: translateY(-10px);
	}

	.card-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
		transition: filter 0.3s ease;
	}

	.project-card:hover .card-image { filter: brightness(1.1); }

	.card-body {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.card-title {
		font-family: 'Orbitron', monospace;
		font-weight: 700;
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
		color: var(--accent-white);
	}

	.card-text {
		color: #cccccc;
		line-height: 1.6;
		margin-bottom: 1rem;
		flex: 1;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.developer-info {
		background: rgba(26,26,26,0.5);
		border-top: 1px solid var(--medium-gray);
		padding: 0.75rem;
		margin: 0 -1.5rem;
		font-size: 0.85rem;
		color: #999;
	}

	.dev-link {
		color: var(--neon-glow);
		text-decoration: none;
		font-weight: 500;
		transition: text-shadow 0.3s ease;
	}

	.dev-link:hover { text-shadow: 0 0 10px var(--neon-glow); }

	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>

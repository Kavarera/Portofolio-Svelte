<script>
	import { formatDate } from '$lib/utils/dateFormatter.js';

	/** @type {import('$lib/features/portfolio/types.js').Experience} */
	export let experience;

	const startFormatted = formatDate(experience.startDate);
	const endFormatted = experience.endDate === 'Present' ? 'Present' : formatDate(experience.endDate);
</script>

<div class="timeline-item">
	<div class="timeline-node"></div>
	<div class="timeline-content">
		<div class="experience-header">
			<h3 class="experience-position">{experience.position}</h3>
			<div class="experience-company">{experience.company}</div>
			<div class="experience-location">📍 {experience.location}</div>
			<div class="experience-duration">📅 {startFormatted} – {endFormatted}</div>
		</div>

		<div class="experience-description">
			{experience.description}
		</div>

		<div class="experience-achievements">
			<h6>🏆 Key Achievements:</h6>
			<ul>
				{#each experience.achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</div>

		<div class="experience-technologies-section">
			<h6>💻 Technologies:</h6>
			<div class="experience-technologies">
				{#each experience.technologies as tech}
					<span class="tech-badge">{tech}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.timeline-item {
		position: relative;
		margin: 3rem 0;
	}

	/* Alternating alignment */
	.timeline-item:global(:nth-child(odd)) { text-align: right; }
	.timeline-item:global(:nth-child(even)) { text-align: left; }

	/* Timeline Node */
	.timeline-node {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 20px;
		height: 20px;
		background: var(--primary-black);
		border: 4px solid var(--neon-glow);
		border-radius: 50%;
		z-index: 2;
		box-shadow: 0 0 0 4px var(--primary-black), 0 0 20px var(--neon-glow);
		animation: pulse 2s infinite;
	}

	/* Content card */
	.timeline-content {
		background: var(--secondary-black);
		border: 2px solid var(--medium-gray);
		border-radius: 15px;
		padding: 2rem;
		margin: 0 3rem;
		position: relative;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		z-index: 3;
		text-align: left;
	}

	.timeline-content:hover {
		border-color: var(--neon-glow);
		box-shadow: 0 15px 40px rgba(0,0,0,0.7), 0 0 20px rgba(0,255,255,0.2);
		transform: translateY(-5px);
	}

	/* Arrow — odd (right side) */
	.timeline-item:global(:nth-child(odd)) .timeline-content::before {
		content: '';
		position: absolute;
		right: -12px;
		top: 30px;
		width: 0;
		height: 0;
		border: 12px solid transparent;
		border-left-color: var(--medium-gray);
		z-index: 4;
	}

	.timeline-item:global(:nth-child(odd)) .timeline-content:hover::before {
		border-left-color: var(--neon-glow);
	}

	/* Arrow — even (left side) */
	.timeline-item:global(:nth-child(even)) .timeline-content::before {
		content: '';
		position: absolute;
		left: -12px;
		top: 30px;
		width: 0;
		height: 0;
		border: 12px solid transparent;
		border-right-color: var(--medium-gray);
		z-index: 4;
	}

	.timeline-item:global(:nth-child(even)) .timeline-content:hover::before {
		border-right-color: var(--neon-glow);
	}

	/* Header */
	.experience-header {
		border-bottom: 1px solid var(--medium-gray);
		padding-bottom: 1rem;
		margin-bottom: 1.5rem;
	}

	.experience-position {
		font-family: 'Orbitron', monospace;
		color: var(--neon-glow);
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		text-shadow: 0 0 10px rgba(0,255,255,0.3);
	}

	.experience-company {
		color: var(--light-gray);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.3rem;
	}

	.experience-location {
		color: var(--medium-gray);
		font-size: 0.9rem;
		margin-bottom: 0.3rem;
	}

	.experience-duration {
		color: var(--neon-glow);
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Description */
	.experience-description {
		color: #cccccc;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		text-align: justify;
	}

	/* Achievements */
	.experience-achievements h6,
	.experience-technologies-section h6 {
		font-family: 'Orbitron', monospace;
		color: var(--neon-glow);
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.8rem;
	}

	.experience-technologies-section h6 {
		margin-top: 1.5rem;
	}

	.experience-achievements ul {
		list-style: none;
		padding: 0;
	}

	.experience-achievements li {
		color: var(--light-gray);
		margin-bottom: 0.5rem;
		position: relative;
		padding-left: 1.5rem;
		line-height: 1.5;
	}

	.experience-achievements li::before {
		content: '▶';
		color: var(--neon-glow);
		position: absolute;
		left: 0;
		top: 0;
		font-size: 0.8rem;
	}

	/* Technologies */
	.experience-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.timeline-item { text-align: left !important; }

		.timeline-node {
			left: 20px;
			transform: translateX(-50%);
		}

		.timeline-content {
			margin: 0 0 0 2rem;
		}

		.timeline-item:global(:nth-child(odd)) .timeline-content::before,
		.timeline-item:global(:nth-child(even)) .timeline-content::before {
			left: -12px !important;
			right: auto !important;
			border-left-color: transparent !important;
			border-right-color: var(--medium-gray) !important;
		}

		.timeline-item:global(:nth-child(odd)) .timeline-content:hover::before,
		.timeline-item:global(:nth-child(even)) .timeline-content:hover::before {
			border-right-color: var(--neon-glow) !important;
			border-left-color: transparent !important;
		}

		.experience-position { font-size: 1.2rem; }
		.experience-company  { font-size: 1rem; }
		.timeline-content    { padding: 1.5rem; }
	}

	@media (max-width: 480px) {
		.timeline-content { margin: 0 0 0 1.5rem; padding: 1rem; }
		.experience-position { font-size: 1.1rem; }
	}
</style>

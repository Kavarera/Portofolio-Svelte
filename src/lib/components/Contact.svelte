<!-- Contact section — fixes:
     1. Missing closing </div> (Instagram/LinkedIn were nested inside GitHub column)
     2. LinkedIn icon was fa-instagram, now correctly fa-linkedin
-->
<section id="contact" class="contact-section">
	<div class="container">
		<h2>Get In Touch</h2>
		<div class="contact-card">
			<p>
				I'm always interested in new opportunities and collaborations. Whether you have a project in mind,
				want to discuss technology, or just want to connect, feel free to reach out!
			</p>

			<!-- FIX: proper 2×2 grid, no missing closing tags -->
			<div class="contact-grid">
				<a href="mailto:kavarera.work.business@gmail.com" class="btn-futuristic">
					<i class="fas fa-envelope"></i> Email Me
				</a>
				<a href="https://www.github.com/Kavarera" class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-github"></i> GitHub
				</a>
				<a href="https://www.instagram.com/r_kavarera" class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-instagram"></i> Instagram
				</a>
				<!-- FIX: was using fa-instagram icon, now fa-linkedin -->
				<a href="https://www.linkedin.com/in/kavarera" class="btn-futuristic" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-linkedin"></i> LinkedIn
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		padding: 5rem 0;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
		text-align: center;
	}

	h2 {
		font-family: 'Orbitron', monospace;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		margin-bottom: 2rem;
		color: var(--accent-white);
	}

	.contact-card {
		background: rgba(26, 26, 26, 0.8);
		border: 1px solid var(--medium-gray);
		border-radius: 15px;
		padding: 2rem;
		backdrop-filter: blur(10px);
	}

	p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #cccccc;
		margin-bottom: 2rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(2, auto);
		gap: 1rem;
		justify-content: center;
	}

	@media (max-width: 480px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

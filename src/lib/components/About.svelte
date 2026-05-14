<section id="about" class="about-section">
	<div class="container">
		<h2>About Me</h2>
		<div class="about-card">
			<p>
				Hello! I'm a passionate Mobile Developer specializing in Flutter and Kotlin, with strong expertise
				in backend development, web technologies using C# .NET, desktop applications, IoT, and cloud
				computing. I love exploring new technologies and continuously expanding my knowledge.
			</p>
			<p>
				Throughout my professional journey, I have led projects and collaborated with teams to deliver
				high-quality solutions. I am deeply focused on writing efficient, optimized, and maintainable code,
				always aiming to improve code quality and adopt the best technologies for each project.
			</p>
			<p>
				Outside of work, I enjoy spending time with friends and learning about the latest trends in software
				development. My goal is to create impactful and user-friendly applications that solve real-world
				problems.
			</p>

			<div class="skills-grid">
				<div class="skills-col">
					<h5>Technical Skills</h5>
					<ul>
						<li>Android Developer Flutter &amp; Kotlin</li>
						<li>Desktop Developer (C# .NET, Java, Flutter)</li>
						<li>Database Management (SQL, Firebase, Supabase)</li>
						<li>IoT &amp; Cloud Computing</li>
					</ul>
				</div>
				<div class="skills-col">
					<h5>Interests</h5>
					<ul>
						<li>Cross-Platform Mobile Development</li>
						<li>Clean Code &amp; Code Optimization</li>
						<li>Software Architecture &amp; Design Patterns</li>
						<li>Cloud Computing &amp; DevOps</li>
						<li>Internet of Things (IoT)</li>
						<li>Continuous Learning &amp; Emerging Technologies</li>
						<li>Technical Leadership &amp; Team Collaboration</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		padding: 5rem 0;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	h2 {
		font-family: 'Orbitron', monospace;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		text-align: center;
		margin-bottom: 2rem;
		color: var(--accent-white);
	}

	.about-card {
		background: rgba(26, 26, 26, 0.8);
		border: 1px solid var(--medium-gray);
		border-radius: 15px;
		padding: 2rem;
		backdrop-filter: blur(10px);
		animation: fadeInUp 1s ease-out 0.6s both;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #cccccc;
		margin-bottom: 1rem;
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-top: 2rem;
	}

	h5 {
		color: var(--neon-glow);
		margin-bottom: 0.75rem;
		font-family: 'Orbitron', monospace;
		font-size: 1rem;
	}

	ul {
		list-style: disc;
		padding-left: 1.2rem;
		color: #cccccc;
	}

	ul li {
		margin-bottom: 0.4rem;
		line-height: 1.5;
	}

	@media (max-width: 600px) {
		.skills-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>

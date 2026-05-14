<script>
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import Contact from '$lib/components/Contact.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Kavarera | Portfolio</title>
</svelte:head>

<Hero />
<About />
<ExperienceTimeline experiences={data.experiences} />
<ProjectsSection projects={data.projects} />
<Contact />

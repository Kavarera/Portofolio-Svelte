import { getProjects, getExperiences } from '$lib/features/portfolio/data.js';

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const projects = await getProjects();
	const experiences = await getExperiences();

	return { projects, experiences };
}

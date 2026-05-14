/**
 * @fileoverview Portfolio data access layer.
 *
 * DATA SOURCE: Currently reads from static JSON files in /static/data/.
 *
 * ── TO SWAP TO POSTGRESQL ──────────────────────────────────────────────────
 * 1. Install a DB driver:   bun add postgres  (or pg, @neondatabase/serverless, etc.)
 * 2. Create a DB client in  src/lib/services/db.js
 * 3. Replace the two functions below with SQL queries, e.g.:
 *
 *    import { db } from '$lib/services/db.js';
 *
 *    export async function getProjects() {
 *      return db.query('SELECT * FROM projects WHERE featured = true ORDER BY id DESC');
 *    }
 *
 *    export async function getExperiences() {
 *      return db.query('SELECT * FROM experiences ORDER BY start_date DESC');
 *    }
 *
 * 4. Remove the readFileSync imports and JSON.parse calls below.
 * ──────────────────────────────────────────────────────────────────────────
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Read a JSON file from the static/data directory.
 * @param {string} filename
 * @returns {any}
 */
function readStaticJson(filename) {
	// Resolves relative to the project root at build/SSR time
	const filePath = resolve('static/data', filename);
	const raw = readFileSync(filePath, 'utf-8');
	return JSON.parse(raw);
}

/**
 * Get all featured projects.
 * @returns {Promise<import('./types.js').Project[]>}
 */
export async function getProjects() {
	try {
		const res = await fetch('http://127.0.0.1:8090/api/collections/projects/records?perPage=100');
		if (res.ok) {
			const pbData = await res.json();
			const items = pbData?.items ?? [];
			if (items.length > 0) {
				return items.filter((/** @type {any} */ p) => p.featured);
			}
		}
	} catch (e) {
		// Fallback jika PocketBase tidak dapat diakses
	}

	const data = readStaticJson('projects.json');
	return (data.projects ?? []).filter((/** @type {import('./types.js').Project} */ p) => p.featured);
}

/**
 * Get all experiences, sorted by startDate descending.
 * @returns {Promise<import('./types.js').Experience[]>}
 */
export async function getExperiences() {
	/** @type {any[]} */
	let experiences = [];

	try {
		const res = await fetch('http://127.0.0.1:8090/api/collections/experiences/records?perPage=100');
		if (res.ok) {
			const pbData = await res.json();
			if (pbData?.items && pbData.items.length > 0) {
				experiences = pbData.items;
			}
		}
	} catch (e) {
		// Fallback jika PocketBase tidak dapat diakses
	}

	if (experiences.length === 0) {
		const data = readStaticJson('experiences.json');
		experiences = data.experiences ?? [];
	}

	return [...experiences].sort((a, b) => {
		const dateA = new Date(a.startDate + '-01').getTime();
		const dateB = new Date(b.startDate + '-01').getTime();
		return dateB - dateA;
	});
}

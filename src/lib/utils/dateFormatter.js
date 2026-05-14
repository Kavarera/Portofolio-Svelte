/**
 * Format a "YYYY-MM" date string to "Mon YYYY".
 * @param {string} dateString - e.g. "2025-10"
 * @returns {string} e.g. "Oct 2025"
 */
export function formatDate(dateString) {
	const [year, month] = dateString.split('-');
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}

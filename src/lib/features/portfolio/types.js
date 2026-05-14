/**
 * @typedef {Object} Developer
 * @property {string} name
 * @property {string} link
 * @property {string} [role]
 */

/**
 * @typedef {Object} ProjectLinks
 * @property {string[]} [github]
 * @property {string} [demo]
 * @property {string} [download1]
 * @property {string} [download2]
 */

/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string[]} technologies
 * @property {ProjectLinks} links
 * @property {Developer[]} developers
 * @property {boolean} featured
 */

/**
 * @typedef {Object} Experience
 * @property {number} id
 * @property {string} position
 * @property {string} company
 * @property {string} location
 * @property {string} startDate   - format: "YYYY-MM"
 * @property {string} endDate     - format: "YYYY-MM" | "Present"
 * @property {string} description
 * @property {string[]} achievements
 * @property {string[]} technologies
 */

export {};

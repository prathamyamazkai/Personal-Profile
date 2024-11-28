/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hi-Tech India Builders',
    position: 'Full-stack Intern',
    url: 'https://hitechindiabuilders.in/',
    startDate: '2023-09-01',
    endDate: '2022-12-15',
    summary: 'Hi-Tech India Builders is a Construction Company.',
    highlights: [
      'Involved in Building and Designing Companies website. ',
      'The tech stack involved in Creation of the website includes HTML, CSS, JavaScript, React and Node. ',
      'Worked on user research and UX. ',
    ],
  },

];

export default work;

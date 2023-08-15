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
    position: 'UI/UX assistant designer',
    url: '',
    startDate: '2022-09-08',
    endDate: '2022-11-01',
    summary: 'Hi-Tech India Builders is a Construction Company.',
    highlights: [
      'Created UI with the help of Figma',
      'Worked on interaction design, user research and scenarios. ',
    ],
  },

];

export default work;

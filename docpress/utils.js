/**
 * Define sidebar of Guide section
 * See : https://github.com/vuejs/vuepress/blob/f077f71a7e54a23998feeef3ee6190b0baff6079/packages/docs/docs/.vuepress/config.js#L108
 *
 * @param {String} local - selected language
 * @param {String} groupA - Title of first group
 *
 * @returns { Array<Object> }
 */
function getGuideSidebar(local, groupA) {
  return [
    {
      text: groupA,
      children: [
        `/docpress/${local}/guides/`,
        'getting-started',
        'use-docpress',
        'documentation-content',
      ],
    },
  ];
}

module.exports = {
  getGuideSidebar,
};

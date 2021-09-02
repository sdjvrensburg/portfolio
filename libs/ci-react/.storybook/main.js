const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/lib/**/*.stories.@(js|jsx|ts|tsx|css)']);

module.exports = rootMain;

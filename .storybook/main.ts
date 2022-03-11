const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias.Bases = __dirname + '/../src/components/base/';
    config.resolve.alias.Actions = __dirname + '/../src/redux/actions/';
    config.resolve.alias.Templates =
      __dirname + '/../src/components/templates/';
    config.resolve.alias.UIpages = __dirname + '/../src/components/pages/';
    config.resolve.alias.Atoms = __dirname + '/../src/components/UI/atoms/';
    config.resolve.alias.Molecules =
      __dirname + '/../src/components/UI/molecules/';
    config.resolve.alias.Organisms =
      __dirname + '/../src/components/UI/organisms/';
    config.resolve.alias.Hoc = __dirname + '/../src/components/HOC/';
    config.resolve.alias.Utils = __dirname + '/../src/utils/';
    config.resolve.alias.StyleVars = __dirname + '/../styles/global_styles.tsx';
    config.resolve.alias.StoriesLayout =
      __dirname + '/../src/components/UI/stories/storiesLayout/index.tsx';
    config.resolve.alias.Layouts =
      __dirname + '/../src/components/layout/index.ts';

    config.resolve.extensions.push(
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mdx',
      '.scss',
    );
    return config;
  },
};

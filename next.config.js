/** @type {import('next').NextConfig} */

const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: true
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders,
    webpack
  }) => {

    // config.resolve.alias.Bases = __dirname + "./src/components/base/index.ts";
    // config.resolve.alias.Actions = __dirname + "./src/redux/actions/index.ts";
    // config.resolve.alias.Vars = __dirname + "./src/assets/vars.scss";
    // config.resolve.alias.Templates = __dirname + "./src/components/templates/index.ts";
    // config.resolve.alias.Pages = __dirname + "./src/components/pages/";
    // config.resolve.alias.Atoms = __dirname + "./src/components/UI/atoms/index.ts";
    // config.resolve.alias.Molecules = __dirname + "./src/components/UI/molecules/index.ts";
    // config.resolve.alias.Organisms = __dirname + "./src/components/UI/organisms/index.ts";
    // config.resolve.alias.Hoc = __dirname + "./src/components/HOC/index.ts";
    // config.resolve.alias.Utils = __dirname + "./src/utils/index.ts";
    // config.resolve.alias.StyleVars = __dirname + "./styles/global_styles.tsx";

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      net: false,
      crypto: false,
    };

    return config;
  }
})
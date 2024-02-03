/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: 'cloudflare-pages',
  server: './server.js',
  devServerBroadcastDelay: 1000,
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverModuleFormat: 'esm',
  serverPlatform: 'browser',
  serverBuildPath: 'functions/[[path]].js',
  publicPath: '/build/',
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
      events: true,
      crypto: true,
      stream: true
    }
  },
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    '@rainbow-me/rainbowkit',
    '@rainbow-me/rainbowkit/wallets',
    /^@?wagmi.*/

  ]
};

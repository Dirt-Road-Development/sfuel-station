/** @type {import('@remix-run/dev').AppConfig} */
export default {
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
      events: true
    }
  },
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    '@rainbow-me/rainbowkit',
    '@rainbow-me/rainbowkit/wallets',
    /^@?wagmi.*/

  ]
};

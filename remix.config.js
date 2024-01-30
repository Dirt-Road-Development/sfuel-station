/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    '@rainbow-me/rainbowkit',
    '@rainbow-me/rainbowkit/wallets',
    /^@?wagmi.*/
  ]
};

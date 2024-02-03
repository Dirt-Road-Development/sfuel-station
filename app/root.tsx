import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import {
  Footer,
  Navigation,
  Web3WalletContainer
} from "~/components";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
    { rel: "stylesheet", href: globalStyles }
  ] : [
    { rel: "stylesheet", href: globalStyles }
  ]),
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  },
];

export async function loader() {
  return json({
    walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID
  });
}

export default function App() {

  const { walletConnectProjectId } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        <Web3WalletContainer
          projectId={walletConnectProjectId?.toString() ?? ""}
        >
          <Outlet />
        </Web3WalletContainer>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

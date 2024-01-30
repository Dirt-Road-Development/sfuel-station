import type { MetaFunction } from "@remix-run/node";
import {Outlet} from "@remix-run/react";
import {useAccount} from "wagmi";
import { ConnectWallet } from "~/components";
import styles from "./styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "sFUEL Station" },
    { name: "description", content: "Welcome to SKALE Network's sFUEL Station" },
  ];
};

export const links = () => [
  { rel: "stylesheet", href: styles }
];

export default function Index() {

  const { address, isConnected } = useAccount();
  
  console.log("Address: ", address, isConnected);

  return (
    <div className="center container">
      {address && isConnected
        ? <Outlet />
        : <ConnectWallet />
      }
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";
import { useAccount } from "wagmi";
import { ConnectWallet } from "~/components";
import styles from "./styles.css";
import { useEffect, useState } from "react";
import { isAddress } from "viem";

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

  const { address: connectedAddress, isConnected } = useAccount();
  const navigate = useNavigate();
  const [address, setAddress] = useState<string | undefined>();
  const [isValidAddress, setIsValidAddress] = useState<boolean>(false);

  useEffect(() => {
    if (connectedAddress !== undefined && isAddress(connectedAddress)) setAddress(connectedAddress);
  }, [connectedAddress]);

  useEffect(() => {
    setIsValidAddress(address !== undefined && isAddress(address));
  }, [address]);

  return (
    <div className="center container">
      <ConnectWallet setAddress={setAddress} />
      {isValidAddress && (
        <>
        <button
          className="next-step-button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/claim-sfuel?address=" + address);
          }}
        >
          Next: Claim sFUEL
        </button>
        </>
      )}
    </div>
  );
}

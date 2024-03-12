import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useAccount } from "wagmi";
import { ConnectWallet } from "~/components";
import styles from "./styles.css";
import { useEffect, useState } from "react";
import { isAddress } from "viem";

export const meta: MetaFunction = () => {
  return [
    { title: "Connect Wallet - sFUEL Station" },
    { name: "description", content: "Connect a Wallet to claim sFUEL from the sFUEL Station" },
  ];
};

export const links = () => [
  { rel: "stylesheet", href: styles }
];

export default function Index() {

  const { address: connectedAddress, isDisconnected } = useAccount();
  const navigate = useNavigate();
  const [address, setAddress] = useState<string | undefined>();
  const [isValidAddress, setIsValidAddress] = useState<boolean>(false);

  useEffect(() => {
    if (connectedAddress !== undefined && isAddress(connectedAddress) && !isDisconnected) {
      setAddress(connectedAddress)
    } else {
      setAddress(undefined);
    }
  }, [connectedAddress]);

  useEffect(() => {
    setIsValidAddress(address !== undefined && isAddress(address));
  }, [address]);

  return (
    <div className="center container">
      <ConnectWallet
        address={address}
        setAddress={setAddress}
      />
      {isValidAddress && (
        <>
        <button
          className="next-step-button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/claim-sfuel/" + address);
          }}
        >
          Next: Claim sFUEL
        </button>
        </>
      )}
    </div>
  );
}

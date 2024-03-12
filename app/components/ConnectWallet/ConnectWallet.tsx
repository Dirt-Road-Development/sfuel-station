import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./styles.css";
import { Dispatch, SetStateAction } from "react";
import { isAddress } from "viem";

export default function ConnectWallet({
  address,
  setAddress
}: {
  address: string | undefined;
  setAddress: Dispatch<SetStateAction<string | undefined>>
}) {
  return (
    <section className="connect-wallet">
      <div className="connect-wallet__header">
        <h3>Connect Wallet</h3>
      </div>
      <div className="connect-options">
        <div className="connection-options__rainbowkit">
          <ConnectButton 
            label="Connect a Web3 Wallet"
          />
        </div>
        <div className="connection-options__or">
          <p>or</p>
        </div>
        <div className="connection-options__manual">
          <input
            type="text"
            name="address"
            placeholder="Input your Ethereum Address"
            defaultValue={address}
            onChange={(e) => {
              e.preventDefault();
              if (isAddress(e.target.value)) {
                setAddress(e.target.value);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

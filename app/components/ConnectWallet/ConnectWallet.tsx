import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./styles.css";

export default function ConnectWallet() {
  return (
    <section className="connect-wallet">
      <div className="connect-wallet__header">
        <h3>Connect Wallet</h3>
      </div>
      <div className="connect-options">
        <div className="connection-options__rainbowkit">
          <ConnectButton />
        </div>
        <div className="connection-options__or">
          <p>or</p>
        </div>
        <div className="connection-options__manual">
          <input type="text" name="address" />
        </div>
      </div>
    </section>
  );
}

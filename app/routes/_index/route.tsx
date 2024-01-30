import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
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

  const navigate = useNavigate();

  return (
    <div className="center">
      <h2>Welcome to the sFUEL Station</h2>
      <div className="highlights">
        <div className="highlight">
          <img src="/skale_logo_w.svg" />
          <h3>SKALE</h3>
          <p>SKALE is a multi-chain network full of many EVM compatible blockchains. SKALE is know for it's zero gas fees, instant finality, and unique validation and economic models.</p>
        </div>
        <div className="highlight">
          <img src="/sfuel.png" />
          <h3>sFUEL</h3>
          <p>SKALE Fuel -- or sFUEL for short -- is the native gas token of each and every SKALE Chain. sFUEL has no monetary value and cannot be purchased on a CEX, DEX, or on-ramp.</p>
        </div>
        <div className="highlight">
          <img className="last" src="/skale_token_w.png" />
          <h3>sFUEL vs SKL</h3>
          <p>SKL is the native utility token of the SKALE Network. It used for delegation, staking, chain payments, and governance. It is not used to pay for gas fees on a SKALE Chain.</p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/connect-wallet");
        }}
      >Next: Connect or Add Wallet</button>
    </div>
  );
}

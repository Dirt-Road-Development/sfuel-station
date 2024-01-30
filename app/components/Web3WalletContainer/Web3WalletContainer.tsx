import {
  RainbowKitProvider,
  ConnectButton,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import type { Chain } from 'wagmi';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleNebula,
  skaleNebulaTestnet,
  skaleTitan,
  skaleTitanTestnet,
  skaleRazor,
  skaleCryptoBlades
} from "wagmi/chains";

import '@rainbow-me/rainbowkit/styles.css';
import {useState} from 'react';

export default function Web3WalletContainer({
  children,
  projectId
}: {
  children: JSX.Element | JSX.Element[];
  projectId: string
}) {
 
  const [{ config, chains }] = useState(() => {

    const { chains, publicClient } = configureChains(
        [skaleCalypso, skaleCalypsoTestnet, skaleChaosTestnet, skaleEuropa, skaleEuropaTestnet, skaleNebula, skaleNebulaTestnet, skaleTitan, skaleTitanTestnet, skaleRazor, skaleCryptoBlades],
      [publicProvider()]
    );

    const { connectors } = getDefaultWallets({
      appName: 'sFUEL Station',
      projectId,
      chains,
    });

    const config = createConfig({
      autoConnect: true,
      connectors,
      publicClient,
    });

    return {
      config,
      chains,
    };
  });

  return (
    <>
      <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains as Chain[]}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
    </>
  );
}

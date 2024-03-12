import {
  RainbowKitProvider,
  getDefaultConfig,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleNebula,
  skaleNebulaTestnet,
  skaleTitan,
  skaleTitanTestnet,
  skaleRazor,
  skaleCryptoBlades,
  Chain
} from "wagmi/chains";

import { useState } from 'react';
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export default function Web3WalletContainer({
  children,
  projectId
}: {
  children?: JSX.Element | JSX.Element[];
  projectId: string;
}) {
 
  const [{ config, chains }] = useState(() => {

    const chains: readonly [Chain, ...Chain[]] = [
      skaleCalypso,
      skaleCalypsoTestnet,
      skaleEuropa,
      skaleEuropaTestnet,
      skaleNebula,
      skaleNebulaTestnet,
      skaleTitan,
      skaleTitanTestnet,
      skaleRazor,
      skaleCryptoBlades
    ]

    const config = getDefaultConfig({
      appName: 'sFUEL Station',
      projectId,
      chains,
      ssr: true,
    });

    return {
      config,
      chains
    }
  });
    
  if (!config || !chains) return null;

  return (
    <>
      <WagmiConfig
        config={config}
      >
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            appInfo={{
              appName: "sFUEL Station",
            }}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </>
  );

}

"use client";
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import React, { ReactNode, useState } from "react";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "viem/chains";
import { useAccount, useSendTransaction, WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const projectId = "55727967a0e4b5b82d166a5c2e179651";

const config = getDefaultConfig({
  appName: "GOLDY",
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, goerli],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;

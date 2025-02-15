"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/images/MainLogo.jpeg";
import PrimaryBtn from "../ui/PrimaryBtn";
import { ConnectButton, darkTheme, Theme } from "@rainbow-me/rainbowkit";
import Data from "./config.json";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useAccount, useSendTransaction, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { parseEther } from "viem";
import CountdownClock from "../CountdownClock";
const projectId = "55727967a0e4b5b82d166a5c2e179651";
const config = getDefaultConfig({
  appName: "GOLDY",
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, goerli],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const Header = () => {
  const { contractAddress, ABI } = Data;
  const { address, isConnecting, isDisconnected } = useAccount();
  const queryClient = new QueryClient();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tokensToSend, setTokensToSend] = useState<string>("");
  const { sendTransaction, isSuccess, isError, error } = useSendTransaction();
  useEffect(() => {
    console.log(isSuccess);
    console.log(isError);
    isError ? alert(error) : null;
    console.log(address);
  }, [isSuccess, isError, error, address]);
  const result = () => {
    sendTransaction({
      to: "0x0bD9Fb8D046737FC7D8FcFeCF27D44264Afe69ab",
      value: parseEther(tokensToSend),
    });
  };

  return (
    <div>
      <CountdownClock />
      <header className="main-container bg-dark flex justify-between items-center rounded-[38px] mt-10 py-[13px] px-[28px] relative z-20">
        {/* logo */}
        <div className="logo flex items-center">
          <Image
            src={Logo}
            alt="logo"
            className="w-20 md:w-[180px] rounded-full"
          />
          <p>
            <h1 className="text-brandColor pt-3d text-4xl m-5">GOLDY-GDYCC</h1>
          </p>
        </div>

        {/* mobile menu button */}
        <div className="block lg:hidden">
          <button
            className="text-orange-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="rotate-90 transition-all w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {/* <ConnectButton /> */}

          <PrimaryBtn download={true} text="Medium Article" />
          <PrimaryBtn action={() => window.open('https://www.pinksale.finance/solana/launchpad/31uuRLAaLop3MbnZ9vT8uWK2pimSea8TD7N2djK6RJ1Z', '_blank')}
            // action={async () => {
            //   sendTransaction({
            //     to: "0x0bD9Fb8D046737FC7D8FcFeCF27D44264Afe69ab",
            //     value: parseEther(tokensToSend),
            //   });
            //   setTokensToSend("");
            // }}
            text="Buy GOLDY"
          />
          {/* <input
            value={tokensToSend}
            type="number"
            style={{ WebkitAppearance: "none" }}
            className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor button-small text-white rounded-xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink"
            placeholder="MATIC To Invest"
            onChange={(e) => {
              setTokensToSend(e.target.value);
            }}
          /> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`w-full pt-6 pb-4 lg:hidden absolute left-0 -bottom-48 bg-dark transition-all rounded-[42px] fade-right`}
          >
            <div className="flex flex-col mx-auto gap-3 w-[200px]">
              <ConnectButton />
              <PrimaryBtn download={true} text="Medium Article" />
              <PrimaryBtn action={() => window.open('https://www.pinksale.finance/', '_blank')}
                // action={() => {
                //   sendTransaction({
                //     to: "0x0bD9Fb8D046737FC7D8FcFeCF27D44264Afe69ab",
                //     value: parseEther(tokensToSend),
                //   });
                //   setTokensToSend("");
                // }}
                text="Buy GOLDY"
              />
              {/* <input
                value={tokensToSend}
                type="number"
                style={{ WebkitAppearance: "none" }}
                className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor button-small text-white rounded-xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink"
                placeholder="MATIC To Invest"
                onChange={(e) => {
                  setTokensToSend(e.target.value);
                }}
              /> */}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

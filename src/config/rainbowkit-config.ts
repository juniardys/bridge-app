import { darkTheme, getDefaultConfig, Theme } from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, optimism, polygon } from "viem/chains";

export const rainbowkitConfig = getDefaultConfig({
  appName: "Bridge App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

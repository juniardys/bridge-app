'use client'

import '@rainbow-me/rainbowkit/styles.css';
import { rainbowkitConfig } from "@/config/rainbowkit-config";
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi"

export function RootProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={rainbowkitConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <AntdRegistry>{children}</AntdRegistry>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
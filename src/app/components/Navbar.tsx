'use client';

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar: React.FC = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-zinc-900 flex justify-between items-center p-4">
      <div className="w-full flex items-center">
        <p className="text-2xl font-medium">Bridge App</p>
      </div>
      <div className="text-purple-500 cursor-pointer w-full flex items-center justify-center">Bridge</div>
      <div className="w-full flex justify-end items-center">
        <ConnectButton />
      </div>
    </div>
  )
}

export default Navbar;
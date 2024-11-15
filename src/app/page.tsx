'use client';

import { ArrowsDownUp } from "@phosphor-icons/react";
import Navbar from "./components/Navbar";
import SelectTokenModal from "./components/SelectTokenModal";
import { useState } from "react";

export default function Home() {
  const [sellTokenModalOpen, setSellTokenModalOpen] = useState(false);
  const [buyTokenModalOpen, setBuyTokenModalOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-purple-500 from-5% to-95% to-zinc-900">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col gap-4 bg-zinc-800 rounded-3xl border-purple-500 border p-4">
          <div className="w-full flex flex-col gap-4 relative">
            <div className="w-full flex flex-col gap-1 bg-zinc-900 p-6 rounded-2xl">
              <div className="flex justify-between items-center w-full">
                <p className="text-lg font-medium">Sell</p>
                <p className="text-sm text-zinc-400">Balance: 0</p>
              </div>
              <div className="flex justify-between items-center w-full gap-4">
                <input
                  type="number"
                  className="py-3 appearance-none focus:outline-none bg-transparent w-full max-w-[300px] text-3xl"
                />
                <button className="bg-purple-500 hover:bg-purple-600 transition-transform duration-200 active:scale-90 rounded-full px-3 py-2" onClick={() => setSellTokenModalOpen(true)}>
                  Select Token
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 bg-zinc-900 p-6 rounded-2xl">
              <div className="flex justify-between items-center w-full">
                <p className="text-lg font-medium">Buy</p>
                <p className="text-sm text-zinc-400">Balance: 0</p>
              </div>
              <div className="flex justify-between items-center w-full gap-4">
                <input
                  type="number"
                  className="py-3 appearance-none focus:outline-none bg-transparent w-full max-w-[300px] text-3xl"
                />
                <button className="bg-purple-500 hover:bg-purple-600 transition-transform duration-200 active:scale-90 rounded-full px-3 py-2" onClick={() => setBuyTokenModalOpen(true)}>
                  Select Token
                </button>
              </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer p-4 bg-purple-500 hover:bg-purple-600 transition-transform duration-200 active:scale-90 rounded-2xl">
              <ArrowsDownUp size={20} className="text-white" />
            </div>
          </div>
          <button className="bg-purple-500 rounded-full text-lg w-full py-2 hover:bg-purple-600 transition-transform duration-200 active:scale-90">
            Swap
          </button>
        </div>
      </div>
      <SelectTokenModal
        isOpen={sellTokenModalOpen}
        onClose={() => setSellTokenModalOpen(false)}
      />
      <SelectTokenModal
        isOpen={buyTokenModalOpen}
        onClose={() => setBuyTokenModalOpen(false)}
      />
    </div>
  );
}

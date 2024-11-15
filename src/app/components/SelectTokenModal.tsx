import { cn } from "@/utils/cn";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef } from "react";

interface SelectTokenModalProps {
  isOpen: boolean;
  onClose?: () => void
}

const SelectTokenModal: React.FC<SelectTokenModalProps> = ({
  isOpen,
  onClose,
}) => {
  const cardModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 w-screen h-screen z-10 bg-zinc-900/50",
      isOpen ? '' : 'hidden',
    )}>
      <div className="w-full h-full flex justify-center items-center" ref={cardModalRef}>
        {/* Card */}
        <div className="w-[500px] min-h-[800px] bg-zinc-800 rounded-2xl flex flex-col gap-4 p-8">
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-medium">Select Token</p>
            <button className="bg-zinc-900 hover:bg-zinc-950 rounded-full p-2 transition-transform duration-200 active:scale-90" onClick={() => onClose && onClose()}>
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTokenModal;
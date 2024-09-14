import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SettingsUnlockPageProps {
  onBack: () => void;
}

export default function SettingsUnlockPage({ onBack }: SettingsUnlockPageProps) {
  return(
    <>
      <header className="flex items-center w-full gap-4 px-6 pb-4 mt-[4.5rem] border-b">
        <button onClick={onBack} className="text-gray-400 hover:text-foreground">
          <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-foreground" />
        </button>
        <p className="font-medium">Unlock</p>
      </header>
      <ScrollArea className="flex flex-col flex-grow w-full overflow-y-auto">
        <button className="flex items-center justify-between w-full h-16 px-6 border-b hover:bg-secondary/70 dark:hover:bg-secondary/20">
          <div className="flex items-center text-left">
            <p className="text-base">Face unlock</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center justify-between w-full h-16 px-6 border-b hover:bg-secondary/70 dark:hover:bg-secondary/20">
          <div className="flex items-center text-left">
            <p className="text-base">Turn on passcode</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center justify-between w-full h-16 px-6 border-b hover:bg-secondary/70 dark:hover:bg-secondary/20">
          <div className="flex items-center text-left">
            <p className="text-base">Change passcode</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </ScrollArea>
    </>
  )
}
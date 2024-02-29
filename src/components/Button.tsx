import { ArrowDownToLine } from "lucide-react";

export function Button() {
  return (
    <button className="flex items-center gap-2 justify-center mt-4">
      <p className="text-sm font-light text-blue-400">Baixar CV</p>
      <ArrowDownToLine className="h-4 w-4 text-blue-400" />
    </button>
  )
}
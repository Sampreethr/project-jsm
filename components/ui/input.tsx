import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none text-slate-900 dark:text-white",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-900 dark:file:text-white",
        "placeholder:text-slate-500 dark:placeholder:text-slate-400",
        "selection:bg-primary-500 selection:text-light-900",
        "border-black/20 dark:border-white/20",
        "focus-visible:border-primary-500 focus-visible:ring-primary-500/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500",
        className
      )}
      {...props}
    />
  )
}

export { Input }

import { Cpu } from 'lucide-react'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
        <Cpu className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-foreground">
          Advanced Systems
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
          &amp; Solutions
        </span>
      </span>
    </span>
  )
}

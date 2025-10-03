"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export type ModuleItem = {
  id: string
  category: "Zakat" | "Infak" | "Sedekah" | "Wakaf"
  title: string
  durationMin: number
  icon: LucideIcon
}

export function ModuleCard({
  item,
  onStart,
  className,
}: {
  item: ModuleItem
  onStart: (id: string) => void
  className?: string
}) {
  const Icon = item.icon
  return (
    <Card className={cn("w-full min-w-[240px]", className)}>
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-accent">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground mb-3">Perkiraan waktu: {item.durationMin} menit</p>
        <Button onClick={() => onStart(item.id)} className="w-full">
          Mulai Belajar
        </Button>
      </CardContent>
    </Card>
  )
}

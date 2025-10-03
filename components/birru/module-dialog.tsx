"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type Quiz = {
  question: string
  options: string[]
  correctIndex: number
}

export type ModuleDetail = {
  id: string
  title: string
  explanation: string
  dalil: string
  quiz: Quiz
}

export function ModuleDialog({
  open,
  onOpenChange,
  detail,
  onCompleted,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  detail: ModuleDetail | null
  onCompleted: (id: string) => void
}) {
  const [selected, setSelected] = React.useState<number | null>(null)
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      setSelected(null)
      setSubmitted(false)
    }
  }, [open])

  if (!detail) return null
  const isCorrect = submitted && selected === detail.quiz.correctIndex

  const handleSubmit = () => {
    setSubmitted(true)
    if (selected === detail.quiz.correctIndex) {
      onCompleted(detail.id)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-pretty">{detail.title}</DialogTitle>
        </DialogHeader>

        <section className="space-y-3">
          <p className="text-sm text-muted-foreground">{detail.explanation}</p>

          <blockquote className={cn("rounded-md border p-3 text-sm", "bg-card/50")}>
            <span className="font-medium">Dalil:</span> {detail.dalil}
          </blockquote>

          <Separator />

          <div aria-label="Kuis singkat" className="space-y-2">
            <p className="text-sm font-medium">{detail.quiz.question}</p>
            <div className="grid gap-2">
              {detail.quiz.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={cn(
                    "text-left rounded-md border px-3 py-2 text-sm",
                    selected === idx ? "border-foreground" : "border-border hover:bg-accent",
                  )}
                  aria-pressed={selected === idx}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Button disabled={selected === null || submitted} onClick={handleSubmit}>
                {submitted ? "Terkirim" : "Kirim Jawaban"}
              </Button>
              {submitted && (
                <span
                  className={cn("text-sm font-medium", isCorrect ? "text-foreground" : "text-muted-foreground")}
                  role="status"
                >
                  {isCorrect ? "Benar! +10 XP" : "Belum tepat, coba lagi."}
                </span>
              )}
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-2">
            <p className="text-sm">Amalkan ilmunya:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="secondary">
                <a href="/infak">Salurkan Infak</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/wakaf">Salurkan Wakaf</a>
              </Button>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}

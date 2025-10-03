"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Home,
  Book,
  Calculator,
  HandHeart,
  Landmark,
  BookOpen,
  ArrowRight,
  Package,
  Users,
  CheckCircle2,
  Camera,
  Building2,
} from "lucide-react"

export default function WakafPage() {
  const [customAmount, setCustomAmount] = React.useState<string>("")
  const [selectedAmount, setSelectedAmount] = React.useState<number>(100000)

  const projectRef = React.useRef<HTMLDivElement>(null)

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleDonate = () => {
    const amount = customAmount ? Number(customAmount) : selectedAmount
    console.log("[v0] Wakaf amount:", amount)
    alert(`Terima kasih! Wakaf Anda: Rp ${amount.toLocaleString("id-ID")}`)
  }

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto max-w-screen-sm px-4 pb-28 pt-6">
        {/* Title and Subtitle */}
        <header className="mb-6">
          <h1 className="text-balance text-4xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent mb-3">
            Wakaf Produktif 🕌
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Investasi akhirat yang terus mengalir pahalanya. Wakaf untuk pembangunan masjid dan fasilitas pendidikan.
          </p>
        </header>

        {/* Dalil Wakaf */}
        <section className="mb-6" aria-label="Dalil Wakaf">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Dalil Wakaf
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-pretty text-base leading-relaxed text-right mb-3 font-arabic" dir="rtl">
                  إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ
                </p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  "Apabila anak Adam meninggal dunia, terputus amalnya kecuali tiga: sedekah jariyah (wakaf), ilmu yang
                  bermanfaat, dan doa anak saleh."
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">(HR. Muslim)</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pilihan Materi Wakaf */}
        <section className="mb-6" aria-label="Materi Literasi Wakaf">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Materi Literasi Wakaf 📚
            </h2>
          </div>
          <div className="grid gap-3">
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">Pengertian Wakaf</h3>
                <p className="text-sm text-muted-foreground">
                  Pelajari definisi, hukum, dan jenis-jenis wakaf dalam Islam
                </p>
              </CardContent>
            </Card>
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">Syarat dan Rukun Wakaf</h3>
                <p className="text-sm text-muted-foreground">Pahami syarat wakif, mauquf, dan mauquf alaih</p>
              </CardContent>
            </Card>
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">Manfaat Wakaf Produktif</h3>
                <p className="text-sm text-muted-foreground">Kenali dampak sosial dan ekonomi wakaf produktif</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pilih Proyek Wakaf */}
        <section className="mb-6" aria-label="Proyek Wakaf" ref={projectRef}>
          <h2 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Proyek Wakaf Tersedia 🕌
          </h2>
          <WakafProject />
        </section>

        {/* Card Nominal Custom */}
        <section className="mb-6" aria-label="Nominal Wakaf">
          <h2 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pilih Nominal Wakaf 💰
          </h2>
          <Card className="border-2">
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {[50000, 100000, 250000].map((amt) => (
                  <Button
                    key={amt}
                    type="button"
                    variant={selectedAmount === amt && !customAmount ? "default" : "secondary"}
                    onClick={() => {
                      setSelectedAmount(amt)
                      setCustomAmount("")
                    }}
                    className="h-auto rounded-xl border-2 py-3 text-sm font-semibold shadow-sm"
                  >
                    Rp {(amt / 1000).toFixed(0)}K
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                <label htmlFor="custom-wakaf" className="text-sm font-medium">
                  Atau masukkan nominal custom
                </label>
                <Input
                  id="custom-wakaf"
                  inputMode="numeric"
                  placeholder="Contoh: 500000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value.replace(/[^\d]/g, ""))}
                  className="h-12 rounded-xl border-2"
                />
              </div>
              <Button onClick={handleDonate} size="lg" className="w-full shadow-lg">
                <Landmark className="mr-2 h-4 w-4" />
                Wakaf Sekarang
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Transparansi */}
        <section className="mb-6" aria-label="Transparansi Wakaf">
          <h2 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transparansi Proyek 🔍
          </h2>
          <TransparencyTimeline />
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav
        aria-label="Navigasi utama"
        className="fixed inset-x-0 bottom-0 z-10 border-t-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="mx-auto flex max-w-screen-sm items-stretch justify-around px-3 py-3">
          <Link
            href="/"
            aria-label="Beranda"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-sm transition-all hover:bg-primary/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <Home className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold">Home</span>
          </Link>

          <Link
            href="/edukasi"
            aria-label="Edukasi"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-sm transition-all hover:bg-accent/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
              <Book className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold">Edukasi</span>
          </Link>

          <Link
            href="/zakat"
            aria-label="Zakat"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-sm transition-all hover:bg-warning/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/20 text-warning-foreground">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold">Zakat</span>
          </Link>

          <Link
            href="/infak"
            aria-label="Infaq"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-sm transition-all hover:bg-primary/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <HandHeart className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold">Infaq</span>
          </Link>

          <Link
            href="/wakaf"
            aria-label="Wakaf"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-sm transition-all hover:bg-accent/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
              <Landmark className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold">Wakaf</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

function WakafProject() {
  const project = {
    id: "masjid-miftahul-ulum",
    name: "Masjid Miftahul Ulum MAN IC Batam",
    description:
      "Pembangunan dan renovasi masjid untuk kegiatan ibadah dan pendidikan Islam di MAN Insan Cendekia Batam",
    target: 500_000_000,
    collected: 287_500_000,
    imageQuery: "modern mosque islamic architecture indonesia",
  }

  const percent = Math.min(100, Math.round((project.collected / project.target) * 100))

  return (
    <Card className="border-2">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-base">{project.name}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <img
          src={`/.jpg?height=160&width=560&query=${encodeURIComponent(project.imageQuery)}`}
          alt={`Gambar proyek ${project.name}`}
          className="h-40 w-full rounded-xl object-cover"
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Terkumpul</span>
            <span className="font-semibold text-primary">{`Rp ${project.collected.toLocaleString("id-ID")}`}</span>
          </div>
          <Progress value={percent} aria-label={`Progres ${percent}%`} className="h-3" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{percent}% tercapai</span>
            <span>Target: Rp {project.target.toLocaleString("id-ID")}</span>
          </div>
        </div>
        <div className="rounded-lg bg-accent/10 p-3 space-y-1 text-sm">
          <div className="font-semibold">Manfaat Proyek:</div>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Tempat ibadah untuk 500+ jamaah</li>
            <li>Ruang kajian dan pendidikan Islam</li>
            <li>Fasilitas wudhu dan sanitasi modern</li>
            <li>Perpustakaan mini dan ruang baca</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function TransparencyTimeline() {
  const entries = [
    {
      type: "donation",
      title: "Wakaf Masuk",
      amount: 500000,
      date: "15 Des 2024",
      time: "10:30",
      donor: "Dermawan Anonim",
      method: "Transfer Bank",
    },
    {
      type: "distribution",
      title: "Pembangunan Fase 2",
      target: "Pemasangan Kubah dan Menara",
      date: "18 Des 2024",
      time: "08:00",
      quantity: "Progress 40%",
      hasDoc: true,
    },
    {
      type: "impact",
      title: "Dampak Sosial",
      impact: "Kubah masjid telah terpasang, menara dalam proses finishing. Estimasi selesai Januari 2025.",
      date: "20 Des 2024",
      time: "16:00",
      hasDoc: true,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Flow indicator */}
      <Card className="border-2 bg-gradient-to-r from-primary/10 via-accent/10 to-warning/10">
        <CardContent className="p-4">
          <div className="text-sm font-semibold mb-3 text-center">Alur Dana Transparan</div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <Landmark className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Wakaf Kamu</span>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Pembangunan</span>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warning text-warning-foreground shadow-lg">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Umat</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline entries */}
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <Card
            key={i}
            className={`border-2 transition-all hover:shadow-md ${
              entry.type === "donation"
                ? "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30"
                : entry.type === "distribution"
                  ? "bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30"
                  : "bg-gradient-to-br from-warning/5 to-warning/10 border-warning/30"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                    entry.type === "donation"
                      ? "bg-primary text-primary-foreground"
                      : entry.type === "distribution"
                        ? "bg-accent text-accent-foreground"
                        : "bg-warning text-warning-foreground"
                  }`}
                >
                  {entry.type === "donation" ? (
                    <Landmark className="h-6 w-6" />
                  ) : entry.type === "distribution" ? (
                    <Package className="h-6 w-6" />
                  ) : (
                    <CheckCircle2 className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-base">{entry.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {entry.date} • {entry.time}
                      </div>
                    </div>
                    {entry.hasDoc && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="shrink-0">
                            <Camera className="mr-1 h-3 w-3" />
                            Foto
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Dokumentasi Pembangunan</DialogTitle>
                            <DialogDescription>Bukti foto progress pembangunan masjid</DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-3">
                            <img
                              src={`/.jpg?height=200&width=200&query=${encodeURIComponent("mosque construction progress " + (i + 1))}`}
                              alt="Dokumentasi 1"
                              className="h-40 w-full rounded-lg object-cover"
                            />
                            <img
                              src={`/.jpg?height=200&width=200&query=${encodeURIComponent("mosque dome installation " + (i + 1))}`}
                              alt="Dokumentasi 2"
                              className="h-40 w-full rounded-lg object-cover"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>

                  {entry.type === "donation" && (
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-primary">Rp {entry.amount.toLocaleString("id-ID")}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Dari: {entry.donor}</span>
                        <span>•</span>
                        <span>{entry.method}</span>
                      </div>
                    </div>
                  )}

                  {entry.type === "distribution" && (
                    <div className="space-y-1">
                      <div className="text-sm font-medium">{entry.target}</div>
                      <div className="text-xs text-muted-foreground">{entry.quantity}</div>
                    </div>
                  )}

                  {entry.type === "impact" && (
                    <div className="rounded-lg bg-warning/20 p-3 text-sm font-medium">{entry.impact}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

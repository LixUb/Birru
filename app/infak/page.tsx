"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Flame,
  Book,
  HandHeart,
  Landmark,
  Home,
  Calculator,
  Sparkles,
  Camera,
  CheckCircle2,
  ArrowRight,
  Package,
  Users,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function InfakPage() {
  const projectRef = React.useRef<HTMLDivElement>(null)

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto max-w-screen-sm px-4 pb-28 pt-6">
        <header className="mb-6">
          <h1 className="text-balance text-4xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent mb-3">
            Infaq Harian ✨
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Kecil tapi istiqomah, besar di sisi Allah. Mulai berinfak hari ini!
          </p>
        </header>

        <section className="mb-6">
          <Card className="border-2 bg-gradient-to-br from-primary/10 via-accent/10 to-warning/10">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-foreground">💡 Dalil Infaq</p>
                  <p className="text-pretty text-base leading-relaxed text-right font-arabic" dir="rtl">
                    مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَنْ
                    يَشَاءُ
                  </p>
                  <p className="text-muted-foreground">
                    "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan
                    tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan bagi siapa yang Dia
                    kehendaki."
                  </p>
                  <p className="text-xs text-muted-foreground">(QS. Al-Baqarah: 261)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-label="Target Harian & Progress" className="mb-6">
          <DailyTargetInfak onTambahInfak={scrollToProject} />
        </section>

        <section aria-label="Gamification Streak" className="mb-6">
          <Gamification />
        </section>

        <section aria-label="Pilih Proyek Infaq" className="mb-6" ref={projectRef}>
          <h2 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pilih Proyek untuk Di-infakkan 🎯
          </h2>
          <InfaqProject />
        </section>

        <section aria-label="Transparansi Dana" className="mb-6 space-y-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transparansi 🔍
          </h2>
          <TransparencyTimeline />
        </section>

        <section aria-label="Riwayat Infaq" className="mb-6">
          <DonationHistory />
        </section>
      </main>

      {/* BottomNav */}
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

function DailyTargetInfak({ onTambahInfak }: { onTambahInfak: () => void }) {
  const target = 50000
  const achieved = 20000
  const percent = Math.min(100, Math.round((achieved / target) * 100))

  return (
    <Card className="border-2">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <Target className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-base">Target Harian Infak 🎯</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{`Target: Rp ${target.toLocaleString("id-ID")}`}</span>
          <span className="font-semibold text-primary">{`Rp ${achieved.toLocaleString("id-ID")}`}</span>
        </div>
        <Progress value={percent} aria-label="Progres infak harian" className="h-3" />
        <Button className="w-full" size="lg" aria-label="Tambah Infak" onClick={onTambahInfak}>
          <HandHeart className="mr-2 h-4 w-4" />
          Tambah Infak
        </Button>
      </CardContent>
    </Card>
  )
}

function Gamification() {
  const streakDays = 5
  return (
    <Card className="border-2 bg-gradient-to-br from-warning/10 to-warning/5">
      <CardContent className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warning text-warning-foreground shadow-lg">
            <Flame className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <div className="font-semibold text-lg">{streakDays} hari berturut-turut 🔥</div>
            <div className="text-sm text-muted-foreground">Pertahankan streakmu!</div>
          </div>
        </div>
        <div
          className="flex items-center gap-1"
          role="img"
          aria-label="Indikator streak 7 hari"
          aria-valuemin={0}
          aria-valuemax={7}
          aria-valuenow={streakDays}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-5 rounded-full ${i < streakDays ? "bg-warning shadow-sm" : "bg-muted"}`}
              aria-hidden="true"
            />
          ))}
          <span className="sr-only">{`${streakDays} dari 7 hari`}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function InfaqProject() {
  const project = {
    id: "sembako-icare",
    name: "Sembako ICare MAN IC Batam",
    description: "Bantuan sembako untuk keluarga kurang mampu di lingkungan MAN Insan Cendekia Batam",
    target: 50_000_000,
    collected: 32_500_000,
    imageQuery: "food packages groceries donation indonesia",
  }

  const percent = Math.min(100, Math.round((project.collected / project.target) * 100))

  return (
    <Card className="border-2">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <HandHeart className="h-6 w-6" aria-hidden="true" />
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
        <Button className="w-full" size="lg">
          <HandHeart className="mr-2 h-4 w-4" />
          Infak ke Proyek Ini
        </Button>
      </CardContent>
    </Card>
  )
}

function TransparencyTimeline() {
  const entries = [
    {
      type: "donation",
      title: "Donasi Masuk",
      amount: 35000,
      date: "10 Des 2024",
      time: "09:12",
      donor: "Hamba Allah",
      method: "QRIS",
    },
    {
      type: "distribution",
      title: "Penyaluran",
      target: "Paket Sembako Batch #12",
      date: "11 Des 2024",
      time: "14:10",
      quantity: "15 paket sembako",
      hasDoc: true,
    },
    {
      type: "impact",
      title: "Dampak Sosial",
      impact: "15 keluarga menerima paket sembako lengkap",
      date: "12 Des 2024",
      time: "17:05",
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
                <HandHeart className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Donasi Kamu</span>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Penyaluran</span>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warning text-warning-foreground shadow-lg">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center">Penerima</span>
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
                    <HandHeart className="h-6 w-6" />
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
                            <DialogTitle>Dokumentasi Kegiatan</DialogTitle>
                            <DialogDescription>Bukti foto penyaluran dan dampak</DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-3">
                            <img
                              src={`/.jpg?height=200&width=200&query=${encodeURIComponent("sembako distribution " + (i + 1))}`}
                              alt="Dokumentasi 1"
                              className="h-40 w-full rounded-lg object-cover"
                            />
                            <img
                              src={`/.jpg?height=200&width=200&query=${encodeURIComponent("food package beneficiary " + (i + 1))}`}
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

function DonationHistory() {
  const [month, setMonth] = React.useState<string>("12")
  const [year, setYear] = React.useState<string>("2024")
  const rows = [
    { date: "01/12/2024", amount: 5000, status: "Sukses", program: "Sembako ICare" },
    { date: "05/12/2024", amount: 20000, status: "Sukses", program: "Sembako ICare" },
    { date: "10/12/2024", amount: 10000, status: "Sukses", program: "Sembako ICare" },
  ]

  return (
    <Card className="border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Riwayat Infaq-ku 📜</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <label className="text-sm text-muted-foreground" htmlFor="month">
            Bulan
          </label>
          <select
            id="month"
            className="h-9 rounded-lg border-2 bg-background px-2 text-sm font-medium"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            aria-label="Filter bulan"
          >
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">Mei</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Agu</option>
            <option value="9">Sep</option>
            <option value="10">Okt</option>
            <option value="11">Nov</option>
            <option value="12">Des</option>
          </select>

          <label className="text-sm text-muted-foreground" htmlFor="year">
            Tahun
          </label>
          <select
            id="year"
            className="h-9 rounded-lg border-2 bg-background px-2 text-sm font-medium"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-label="Filter tahun"
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-2 pr-3 font-semibold">Tanggal</th>
                <th className="py-2 pr-3 font-semibold">Jumlah</th>
                <th className="py-2 pr-3 font-semibold">Status</th>
                <th className="py-2 pr-3 font-semibold">Program</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 pr-3">{r.date}</td>
                  <td className="py-3 pr-3 font-semibold">{`Rp ${r.amount.toLocaleString("id-ID")}`}</td>
                  <td className="py-3 pr-3">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 pr-3 text-xs">{r.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

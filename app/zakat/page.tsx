"use client"

import * as React from "react"
import Link from "next/link"
import { Home, Book, Calculator, HandHeart, Landmark, BookOpen, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Jenis = "fitrah" | "mal" | "profesi" | "perdagangan"

export default function ZakatPage() {
  const [step, setStep] = React.useState<1 | 2 | 3 | 4>(1)
  const [jenis, setJenis] = React.useState<Jenis | null>(null)
  const [showDalil, setShowDalil] = React.useState(false)

  // inputs
  const [anggota, setAnggota] = React.useState<number>(1)
  const [hargaBeras, setHargaBeras] = React.useState<number>(12500)

  const [jumlahHarta, setJumlahHarta] = React.useState<number>(0)
  const [hargaEmasPerGram, setHargaEmasPerGram] = React.useState<number>(1200000)

  const [gaji, setGaji] = React.useState<number>(0)
  const [includeBonus, setIncludeBonus] = React.useState<boolean>(false)
  const [bonus, setBonus] = React.useState<number>(0)

  const [modal, setModal] = React.useState<number>(0)
  const [laba, setLaba] = React.useState<number>(0)
  const [hutang, setHutang] = React.useState<number>(0)
  const [hargaEmasDagang, setHargaEmasDagang] = React.useState<number>(1200000)

  const UPZ_URL = "https://upz-manicbatam.com/zakat" // Placeholder URL - adjust to actual URL

  const formatIDR = (n: number) => `Rp ${Math.max(0, Math.floor(n || 0)).toLocaleString("id-ID")}`

  const nisabMal = 85 * (jenis === "perdagangan" ? hargaEmasDagang : hargaEmasPerGram)

  const hasil = React.useMemo(() => {
    if (jenis === "fitrah") {
      const totalKg = 2.5 * (anggota || 0)
      const estimasi = totalKg * (hargaBeras || 0)
      return { label: `${totalKg.toFixed(1)} kg beras`, nilai: estimasi, wajib: true }
    }
    if (jenis === "mal") {
      const wajib = (jumlahHarta || 0) >= (nisabMal || 0)
      const nilai = wajib ? 0.025 * (jumlahHarta || 0) : 0
      return { label: "2,5% dari harta", nilai, wajib }
    }
    if (jenis === "profesi") {
      const basis = (gaji || 0) + (includeBonus ? bonus || 0 : 0)
      const nilai = 0.025 * basis
      return { label: "2,5% dari gaji (±)", nilai, wajib: basis > 0 }
    }
    if (jenis === "perdagangan") {
      const neto = (modal || 0) + (laba || 0) - (hutang || 0)
      const wajib = neto >= nisabMal
      const nilai = wajib ? 0.025 * neto : 0
      return { label: "2,5% dari (modal + laba – hutang)", nilai, wajib }
    }
    return { label: "", nilai: 0, wajib: false }
  }, [jenis, anggota, hargaBeras, jumlahHarta, nisabMal, gaji, includeBonus, bonus, modal, laba, hutang])

  const dalil = React.useMemo(() => {
    switch (jenis) {
      case "fitrah":
        return "فَرَضَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ أَوْ صَاعًا مِنْ شَعِيرٍ\n\n\"Rasulullah SAW mewajibkan zakat fitrah sebesar satu sha' kurma atau satu sha' gandum (setara ~2,5 kg makanan pokok).\" (HR. Bukhari-Muslim)"
      case "mal":
        return 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا\n\n"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka." (QS. At-Taubah: 103)\n\nNisab emas setara 85 gram, perak 595 gram.'
      case "profesi":
        return 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ\n\n"Wahai orang-orang yang beriman, infakkanlah sebagian dari hasil usahamu yang baik-baik." (QS. Al-Baqarah: 267)\n\nZakat penghasilan/profesi diqiyaskan pada zakat mal, dengan kadar 2,5% dari penghasilan bersih yang mencapai nisab.'
      case "perdagangan":
        return 'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ\n\n"Dan pada harta mereka ada hak yang tertentu." (QS. Al-Ma\'arij: 24)\n\nZakat perdagangan 2,5% dari harta niaga (modal + laba - hutang) yang mencapai nisab setelah satu haul.'
      default:
        return ""
    }
  }, [jenis])

  const gotoStep = (n: 1 | 2 | 3 | 4) => setStep(n)
  const reset = () => {
    setStep(1)
    setJenis(null)
  }

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto max-w-screen-sm px-4 pb-28 pt-6">
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent mb-2">
            Kalkulator Zakat 🧮
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Hitung zakatmu secara ringkas sesuai jenisnya, lalu tunaikan di{" "}
            <span className="font-semibold text-primary">UPZ MAN Insan Cendekia Kota Batam</span>.
          </p>
        </header>

        <section className="mb-6" aria-label="Dalil Zakat">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Dalil Zakat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-pretty text-base leading-relaxed text-right mb-3 font-arabic" dir="rtl">
                  خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا
                </p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  "Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka."
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">(QS. At-Taubah: 103)</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-6" aria-label="Materi Literasi Zakat">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              Materi Literasi Zakat
            </h2>
          </div>
          <div className="grid gap-3">
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">Pengertian Zakat</h3>
                <p className="text-sm text-muted-foreground">
                  Pelajari definisi, hukum, dan kedudukan zakat dalam Islam
                </p>
              </CardContent>
            </Card>
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">Syarat dan Rukun Zakat</h3>
                <p className="text-sm text-muted-foreground">Pahami syarat wajib, nisab, haul, dan rukun zakat</p>
              </CardContent>
            </Card>
            <Card
              className="border-2 border-accent/30 hover:border-accent transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/edukasi")}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">8 Golongan Penerima Zakat</h3>
                <p className="text-sm text-muted-foreground">Kenali mustahik zakat sesuai QS. At-Taubah: 60</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-6" />

        {/* Step indicator */}
        <nav aria-label="Langkah kalkulator" className="mb-4 flex items-center gap-2 text-sm font-medium">
          <span className={step >= 1 ? "text-primary" : "text-muted-foreground"}>1. Pilih Jenis</span>
          <span className="text-muted-foreground">•</span>
          <span className={step >= 2 ? "text-primary" : "text-muted-foreground"}>2. Input Data</span>
          <span className="text-muted-foreground">•</span>
          <span className={step >= 3 ? "text-primary" : "text-muted-foreground"}>3. Hasil</span>
          <span className="text-muted-foreground">•</span>
          <span className={step >= 4 ? "text-primary" : "text-muted-foreground"}>4. Motivasi</span>
        </nav>

        {/* Step 1 */}
        {step === 1 && (
          <section aria-label="Pilih Jenis Zakat" className="grid gap-4">
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Step 1: Pilih Jenis Zakat</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {(
                  [
                    { key: "fitrah", label: "Zakat Fitrah", emoji: "🌙" },
                    { key: "mal", label: "Zakat Mal", emoji: "💰" },
                    { key: "profesi", label: "Zakat Profesi", emoji: "💼" },
                    { key: "perdagangan", label: "Zakat Perdagangan", emoji: "📊" },
                  ] as Array<{ key: Jenis; label: string; emoji: string }>
                ).map((opt) => (
                  <Button
                    key={opt.key}
                    variant={jenis === opt.key ? "default" : "secondary"}
                    onClick={() => setJenis(opt.key)}
                    aria-pressed={jenis === opt.key}
                    className="h-20 text-base font-semibold rounded-xl"
                  >
                    <span className="flex flex-col items-center gap-1">
                      <span className="text-2xl">{opt.emoji}</span>
                      <span>{opt.label}</span>
                    </span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pilih satu jenis zakat untuk melanjutkan.</span>
              <Button onClick={() => jenis && gotoStep(2)} disabled={!jenis} className="rounded-xl font-semibold">
                Lanjut →
              </Button>
            </div>
          </section>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <section aria-label="Input Data" className="grid gap-4">
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Step 2: Input Data</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {jenis === "fitrah" && (
                  <div className="grid gap-4">
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Jumlah anggota keluarga</span>
                      <Input
                        type="number"
                        min={1}
                        value={Number.isFinite(anggota) ? anggota : 1}
                        onChange={(e) => setAnggota(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Harga beras per kg (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(hargaBeras) ? hargaBeras : 0}
                        onChange={(e) => setHargaBeras(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-xl">
                      💡 Zakat fitrah: 2,5 kg beras per orang.
                    </p>
                  </div>
                )}

                {jenis === "mal" && (
                  <div className="grid gap-4">
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Jumlah harta (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(jumlahHarta) ? jumlahHarta : 0}
                        onChange={(e) => setJumlahHarta(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Harga emas per gram (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(hargaEmasPerGram) ? hargaEmasPerGram : 0}
                        onChange={(e) => setHargaEmasPerGram(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <div className="rounded-xl bg-accent/20 p-4 text-sm font-medium">
                      📊 Nisab ≈ 85 gram emas = {formatIDR(nisabMal)}
                    </div>
                  </div>
                )}

                {jenis === "profesi" && (
                  <div className="grid gap-4">
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Gaji bulanan (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(gaji) ? gaji : 0}
                        onChange={(e) => setGaji(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <div className="flex items-center gap-3 text-sm">
                      <input
                        id="include-bonus"
                        type="checkbox"
                        className="h-5 w-5 rounded"
                        checked={includeBonus}
                        onChange={(e) => setIncludeBonus(e.target.checked)}
                      />
                      <label htmlFor="include-bonus" className="font-medium">
                        Hitung bonus
                      </label>
                    </div>
                    {includeBonus && (
                      <label className="grid gap-2 text-sm">
                        <span className="font-semibold">Bonus (Rp)</span>
                        <Input
                          type="number"
                          min={0}
                          value={Number.isFinite(bonus) ? bonus : 0}
                          onChange={(e) => setBonus(Number.parseInt(e.target.value || "0"))}
                          className="h-12 rounded-xl"
                        />
                      </label>
                    )}
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-xl">
                      💡 Perkiraan 2,5% dari penghasilan yang diterima.
                    </p>
                  </div>
                )}

                {jenis === "perdagangan" && (
                  <div className="grid gap-4">
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Nilai aset/modal (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(modal) ? modal : 0}
                        onChange={(e) => setModal(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Keuntungan bersih (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(laba) ? laba : 0}
                        onChange={(e) => setLaba(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Hutang (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(hutang) ? hutang : 0}
                        onChange={(e) => setHutang(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <label className="grid gap-2 text-sm">
                      <span className="font-semibold">Harga emas per gram (Rp)</span>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(hargaEmasDagang) ? hargaEmasDagang : 0}
                        onChange={(e) => setHargaEmasDagang(Number.parseInt(e.target.value || "0"))}
                        className="h-12 rounded-xl"
                      />
                    </label>
                    <div className="rounded-xl bg-accent/20 p-4 text-sm font-medium">
                      📊 Nisab ≈ 85 gram emas = {formatIDR(nisabMal)}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => gotoStep(1)} className="rounded-xl font-semibold">
                ← Kembali
              </Button>
              <Button onClick={() => gotoStep(3)} className="rounded-xl font-semibold">
                Hitung →
              </Button>
            </div>
          </section>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <section aria-label="Hasil Perhitungan" className="grid gap-4">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Step 3: Hasil Perhitungan</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="rounded-xl bg-white shadow-sm p-4 border-2 border-accent/20">
                  <div className="text-sm text-muted-foreground mb-1">Jenis Zakat</div>
                  <div className="text-xl font-bold capitalize text-primary">{jenis ?? "-"}</div>
                </div>

                {jenis === "fitrah" ? (
                  <div className="grid gap-2 text-sm rounded-xl bg-white shadow-sm p-4 border-2 border-primary/20">
                    <div className="font-semibold text-muted-foreground">Kewajiban</div>
                    <div className="text-lg font-bold">{hasil.label}</div>
                    <div className="text-2xl font-bold text-primary">{formatIDR(hasil.nilai)}</div>
                  </div>
                ) : (
                  <div className="grid gap-2 text-sm rounded-xl bg-white shadow-sm p-4 border-2 border-primary/20">
                    <div className="font-semibold text-muted-foreground">Jumlah Zakat</div>
                    <div className="text-3xl font-bold text-primary">{formatIDR(hasil.nilai)}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {jenis === "mal" || jenis === "perdagangan"
                        ? `Nisab saat ini: ${formatIDR(nisabMal)} • ${hasil.wajib ? "✅ Wajib" : "⚠️ Belum wajib"}`
                        : "Perkiraan berdasarkan 2,5%."}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Button asChild className="h-12 rounded-xl font-semibold text-base shadow-lg">
                    <a href={UPZ_URL} target="_blank" rel="noopener noreferrer">
                      💚 Tunaikan Zakat di UPZ MAN IC Batam
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    className="h-12 rounded-xl font-semibold"
                    onClick={() => setShowDalil(true)}
                  >
                    📖 Pelajari Dalil
                  </Button>
                </div>

                <Separator />
                <div className="flex items-center justify-between">
                  <Button variant="ghost" onClick={() => gotoStep(2)} className="rounded-xl font-semibold">
                    ← Ubah Input
                  </Button>
                  <Button variant="outline" onClick={() => gotoStep(4)} className="rounded-xl font-semibold">
                    Lanjut →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <section aria-label="Motivasi Penutup" className="grid gap-4">
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Step 4: Motivasi Penutup ✨</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-pretty text-base leading-relaxed font-medium text-center">
                    "Zakat membersihkan harta dan menyucikan jiwa. Yuk istiqomah menunaikan zakat!"
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    onClick={reset}
                    className="flex-1 h-12 rounded-xl font-semibold bg-transparent"
                  >
                    🔄 Hitung Lagi
                  </Button>
                  <Button asChild className="flex-1 h-12 rounded-xl font-semibold shadow-lg">
                    <a href={UPZ_URL} target="_blank" rel="noopener noreferrer">
                      💚 Tunaikan Zakat
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <Dialog open={showDalil} onOpenChange={setShowDalil}>
          <DialogContent className="max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">📖 Dalil Terkait</DialogTitle>
            </DialogHeader>
            <div className="text-sm space-y-3">
              <div className="rounded-xl bg-muted/50 p-4">
                <p className="whitespace-pre-line leading-relaxed">{dalil}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* BottomNav component */}
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

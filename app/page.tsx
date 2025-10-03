import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import {
  Flame,
  Book,
  Calculator,
  HandHeart,
  Landmark,
  Home,
  Target,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Sprout,
  Heart,
  Trophy,
  Zap,
  Medal,
} from "lucide-react"
import { cn } from "@/lib/utils"

function DailyDalilCard() {
  return (
    <Card className="overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Book className="h-4 w-4" aria-hidden="true" />
          </div>
          <CardTitle className="text-sm font-semibold text-muted-foreground">Daily Khasanah ✨</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={cn("rounded-2xl p-4", "bg-white shadow-sm")} aria-label="Khasanah harian">
          <p className="text-pretty text-base leading-relaxed text-right mb-3 font-arabic" dir="rtl">
            مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ ۗ
            وَاللَّهُ وَاسِعٌ عَلِيمٌ
          </p>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh
            tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan bagi siapa yang Dia kehendaki, dan
            Allah Mahaluas lagi Maha Mengetahui."
          </p>
          <p className="text-xs text-muted-foreground mt-2">(QS. Al-Baqarah: 261)</p>
        </div>
        <Button
          asChild
          variant="secondary"
          className="w-full rounded-xl font-semibold"
          aria-label="Lihat Khasanah Lain"
        >
          <Link href="/edukasi">Lihat Khasanah Lain</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function DailyTargetInfak() {
  const target = 50000
  const achieved = 20000
  const percent = Math.min(100, Math.round((achieved / target) * 100))

  return (
    <Card className="overflow-hidden border-2 border-primary/30">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Target className="h-4 w-4" aria-hidden="true" />
          </div>
          <CardTitle className="text-base font-bold">Target Harian Infak 🎯</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-muted-foreground">{`Target: Rp ${target.toLocaleString("id-ID")}`}</span>
          <span className="font-bold text-primary">{`Rp ${achieved.toLocaleString("id-ID")}`}</span>
        </div>
        <Progress value={percent} className="h-3" aria-label="Progres infak harian" />
        <Button
          asChild
          className="w-full rounded-xl font-semibold shadow-lg shadow-primary/20"
          aria-label="Tambah Infak"
        >
          <Link href="/infak">Tambah Infak</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function Gamification() {
  const streakDays = 5

  return (
    <Card className="overflow-hidden border-2 border-warning/30 bg-gradient-to-br from-warning/20 to-warning/5">
      <CardContent className="flex items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warning text-warning-foreground shadow-lg">
            <Flame className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <div className="text-lg font-bold">{streakDays} hari berturut-turut 🔥</div>
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
              className={`h-2 w-6 rounded-full ${i < streakDays ? "bg-warning" : "bg-muted"}`}
              aria-hidden="true"
            />
          ))}
          <span className="sr-only">{`${streakDays} dari 7 hari`}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialImpact() {
  const badges = [
    {
      icon: Sparkles,
      name: "Pemula Ikhlas",
      desc: "Baru mulai, menyelesaikan donasi/zakat pertama.",
      color: "bg-accent/20 text-accent-foreground",
      iconBg: "bg-accent",
    },
    {
      icon: Flame,
      name: "Dermawan Harian",
      desc: "Konsisten 3–7 hari berturut-turut.",
      color: "bg-warning/20 text-warning-foreground",
      iconBg: "bg-warning",
    },
    {
      icon: Trophy,
      name: "Penjaga Amal",
      desc: "Sudah mencapai target harian 10 kali.",
      color: "bg-primary/20 text-primary-foreground",
      iconBg: "bg-primary",
    },
    {
      icon: Sprout,
      name: "Penyemai Kebaikan",
      desc: "Infak rutin selama 1 bulan penuh.",
      color: "bg-emerald-500/20 text-emerald-700",
      iconBg: "bg-emerald-500",
    },
    {
      icon: ShieldCheck,
      name: "Pejuang Sedekah",
      desc: "Menyelesaikan streak 30 hari.",
      color: "bg-purple-500/20 text-purple-700",
      iconBg: "bg-purple-500",
    },
    {
      icon: Medal,
      name: "Penjaga Amal",
      desc: "Zakat + infak + wakaf minimal sekali.",
      color: "bg-amber-500/20 text-amber-700",
      iconBg: "bg-amber-500",
    },
    {
      icon: Lightbulb,
      name: "Penerang Ummat",
      desc: "Donasi bantu capai milestone proyek sosial.",
      color: "bg-orange-500/20 text-orange-700",
      iconBg: "bg-orange-500",
    },
  ]
  const visibleBadges = 4

  return (
    <section aria-label="Dampak Sosial" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card className="border-2 border-primary/20">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" aria-hidden="true" />
            <div className="text-base font-bold">Daily Tips</div>
          </div>
          <Carousel className="relative">
            <CarouselContent className="-ml-3">
              {[
                {
                  title: "Kiat ZISWAF 💡",
                  desc: "Pisahkan dana wajib (zakat) dan sunnah (infak/sedekah) tiap bulan.",
                },
                {
                  title: "Kiat ZISWAF #2 📊",
                  desc: "Catat pemasukan rutin untuk memudahkan perhitungan nisab dan haul.",
                },
                {
                  title: "Kiat ZISWAF #3 💰",
                  desc: "Sisihkan 2.5% dari harta yang telah mencapai nisab saat genap 1 haul.",
                },
                {
                  title: "Kuis Zakat 🎯",
                  desc: "Siapa saja mustahik zakat? Uji pengetahuanmu!",
                },
                {
                  title: "Fakta Menarik ✨",
                  desc: "Wakaf produktif bisa biayai sekolah tanpa habiskan pokok.",
                },
              ].map((it, i) => (
                <CarouselItem key={i} className="basis-4/5 pl-3 sm:basis-full">
                  <Card className="h-full border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold">{it.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex h-full flex-col justify-between gap-4">
                      <p className="text-sm text-muted-foreground">{it.desc}</p>
                      <Button
                        asChild
                        variant="secondary"
                        className="w-full rounded-xl font-semibold"
                        aria-label="Pelajari Lebih Lanjut"
                      >
                        <Link href="/edukasi">Pelajari Lebih Lanjut</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>

      <Card className="border-2 border-warning/20">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-warning" aria-hidden="true" />
            <div className="text-base font-bold">Badge Achievement 🏆</div>
          </div>
          <ul className="space-y-3" aria-label="Daftar badge">
            {badges.slice(0, visibleBadges).map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-sm",
                    b.iconBg,
                    "text-white",
                  )}
                >
                  <b.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          {badges.length > visibleBadges && (
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-full rounded-xl font-semibold"
                aria-label="Lihat badge lainnya"
              >
                Lihat lainnya
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

function EducationCarousel() {
  const items = [
    {
      title: "Fun Fact: Zakat Fitrah 🌙",
      desc: "Umumnya dibayar setara ±2,5 kg beras per orang dan ditunaikan sebelum shalat Id.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Zakat Mal 💰",
      desc: "Wajib saat harta mencapai nisab (≈85 gram emas) dan dimiliki 1 haul (±1 tahun).",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Zakat Profesi 💼",
      desc: "Zakat profesi dianalogikan dengan zakat pertanian. Nisabnya setara 520 kg beras atau ±653 kg gabah, dikeluarkan 2,5% dari penghasilan bersih.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Zakat Emas & Perak ✨",
      desc: "Nisab emas 85 gram dan perak 595 gram. Jika disimpan 1 tahun, wajib dizakati 2,5%. Perhiasan yang dipakai sehari-hari tidak wajib dizakati.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: 8 Asnaf 🤝",
      desc: "Zakat disalurkan kepada 8 golongan: fakir, miskin, amil, mualaf, budak, orang berutang, fisabilillah, dan ibnu sabil.",
      surahName: "QS. At-Taubah: 60",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Zakat Saham 📈",
      desc: "Saham yang disimpan setahun dan capai nisab juga memiliki ketentuan zakat.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Baitul Hikmah 📖",
      desc: "Perpustakaan terbesar di Baghdad abad ke-9 menjadi pusat penerjemahan ilmu pengetahuan dunia. Karya-karya Yunani, Persia, dan India diterjemahkan ke bahasa Arab.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Kopi ☕",
      desc: "Kopi pertama kali ditemukan di Ethiopia dan dipopulerkan oleh para sufi Yaman pada abad ke-15 untuk membantu ibadah malam.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Rumah Sakit 🏥",
      desc: "Rumah sakit modern pertama dengan sistem rawat inap, farmasi, dan perpustakaan medis didirikan di Baghdad tahun 805 M oleh Harun ar-Rasyid.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Aljabar 🔢",
      desc: "Kata 'Aljabar' berasal dari kitab Al-Jabr karya Al-Khawarizmi (780-850 M) yang menjadi dasar matematika modern.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Sedekah Jariyah 🌱",
      desc: "Amal yang pahalanya terus mengalir meski telah wafat: ilmu bermanfaat, anak shalih yang mendoakan, dan sedekah jariyah seperti wakaf.",
      surahName: "HR. Muslim",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Universitas Pertama 🎓",
      desc: "Universitas Al-Qarawiyyin di Maroko didirikan tahun 859 M oleh Fatimah al-Fihri dan masih beroperasi hingga kini sebagai universitas tertua di dunia.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Astronomi Islam 🌙",
      desc: "Banyak nama bintang dalam astronomi modern berasal dari bahasa Arab seperti Aldebaran, Rigel, Vega, dan Betelgeuse.",
      href: "/edukasi",
    },
    {
      title: "Fun Fact: Senyum Sedekah 😊",
      desc: "Rasulullah SAW bersabda: 'Senyummu di hadapan saudaramu adalah sedekah.' Kebaikan sekecil apapun bernilai ibadah.",
      surahName: "HR. Tirmidzi",
      href: "/edukasi",
    },
  ]

  return (
    <section aria-label="Edukasi Zakat">
      <div className="mb-3 flex items-center gap-2">
        <Book className="h-5 w-5 text-primary" aria-hidden="true" />
        <div className="text-base font-bold text-muted-foreground">Fun Fact 📚</div>
      </div>
      <Carousel className="relative">
        <CarouselContent className="-ml-3">
          {items.map((it, i) => (
            <CarouselItem key={i} className="basis-4/5 pl-3 sm:basis-1/2">
              <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">{it.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                    {"surahName" in it && <p className="text-xs text-muted-foreground italic">({it.surahName})</p>}
                  </div>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full rounded-xl font-semibold"
                    aria-label="Pelajari Selengkapnya"
                  >
                    <a href={it.href}>Pelajari Selengkapnya</a>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

function CallToAction() {
  return null
}

function BottomNav() {
  return (
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
  )
}

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto flex max-w-screen-sm flex-col gap-6 px-4 py-6 pb-32">
        <div className="flex items-center gap-3 pt-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-warning shadow-lg">
            <Heart className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Birru
          </span>
        </div>

        <header className="grid gap-4 py-4">
          <h1 className="text-balance text-4xl font-bold leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Assalamu'alaikum! 👋
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Mari kita berbuat kebaikan bersama melalui <span className="font-semibold text-primary">ZISWAF</span> yang
            transparan dan bermakna. Yuk, mulai hari ini! ✨
          </p>
        </header>

        <DailyDalilCard />
        <DailyTargetInfak />
        <Gamification />
        <SocialImpact />
        <EducationCarousel />
        <CallToAction />
      </main>
      <BottomNav />
    </div>
  )
}

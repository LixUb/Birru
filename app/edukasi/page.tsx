"use client"

import * as React from "react"
import Link from "next/link"
import {
  Book,
  Coins,
  Heart,
  Lightbulb,
  Target,
  Flame,
  Award,
  Home,
  Calculator,
  HandHeart,
  Landmark,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ModuleCard, type ModuleItem } from "@/components/birru/module-card"
import { ModuleDialog, type ModuleDetail } from "@/components/birru/module-dialog"

type Category = "Zakat" | "Infak" | "Sedekah" | "Wakaf"

const MODULES: Array<ModuleItem & Pick<ModuleDetail, "explanation" | "dalil"> & { quiz: ModuleDetail["quiz"] }> = [
  {
    id: "z1",
    category: "Zakat",
    title: "Pengertian Zakat",
    durationMin: 5,
    icon: Coins,
    explanation:
      "Zakat secara bahasa berarti 'tumbuh', 'berkembang', 'bersih', atau 'suci'. Secara istilah, zakat adalah harta tertentu yang wajib dikeluarkan oleh orang yang beragama Islam dan diberikan kepada golongan yang berhak menerimanya (fakir miskin dan sebagainya).\n\nZakat merupakan rukun Islam ketiga dan memiliki kedudukan yang sangat penting. Zakat berfungsi untuk membersihkan harta dan jiwa, serta sebagai instrumen pemerataan ekonomi dalam Islam.\n\nAda dua jenis zakat utama: Zakat Fitrah (wajib dikeluarkan menjelang Idul Fitri) dan Zakat Mal (zakat harta yang mencapai nisab dan haul).",
    dalil:
      'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا\n\n"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka." (QS. At-Taubah: 103)',
    quiz: {
      question: "Apa fungsi utama zakat?",
      options: [
        "Hanya membersihkan harta",
        "Membersihkan harta dan jiwa serta pemerataan ekonomi",
        "Hanya untuk fakir miskin",
      ],
      correctIndex: 1,
    },
  },
  {
    id: "z2",
    category: "Zakat",
    title: "Syarat dan Rukun Zakat",
    durationMin: 4,
    icon: Coins,
    explanation:
      "Syarat wajib zakat meliputi: Islam, merdeka, baligh dan berakal, harta mencapai nisab (batas minimum), harta dimiliki secara penuh, dan telah berlalu satu tahun (haul) kecuali zakat pertanian.\n\nRukun zakat ada tiga: Niat (diniatkan karena Allah), mengeluarkan sebagian harta sesuai ketentuan, dan menyerahkan kepada mustahik (penerima zakat yang berhak).\n\nNisab adalah batas minimum harta yang wajib dizakati. Untuk emas nisabnya 85 gram, perak 595 gram, atau setara dengan nilai tersebut dalam bentuk uang atau aset lainnya.",
    dalil:
      'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ\n\n"Dan dirikanlah shalat, tunaikanlah zakat." (QS. Al-Baqarah: 43)\n\nعَنْ عَلِيٍّ رَضِيَ اللَّهُ عَنْهُ: "فَإِذَا كَانَتْ لَكَ مِائَتَا دِرْهَمٍ وَحَالَ عَلَيْهَا الْحَوْلُ فَفِيهَا خَمْسَةُ دَرَاهِمَ"\n\n"Jika engkau memiliki 200 dirham dan telah berlalu satu tahun, maka zakatnya 5 dirham (2,5%)." (HR. Abu Dawud)',
    quiz: {
      question: "Berapa nisab emas untuk zakat?",
      options: ["85 gram", "100 gram", "595 gram"],
      correctIndex: 0,
    },
  },
  {
    id: "z3",
    category: "Zakat",
    title: "8 Golongan Penerima Zakat",
    durationMin: 4,
    icon: Coins,
    explanation:
      "Allah SWT telah menetapkan 8 golongan yang berhak menerima zakat (asnaf):\n\n1. Fakir: tidak memiliki harta dan tenaga untuk memenuhi kebutuhan\n2. Miskin: memiliki harta/penghasilan namun tidak cukup untuk kebutuhan\n3. Amil: pengelola zakat\n4. Muallaf: orang yang baru masuk Islam atau yang perlu dikuatkan imannya\n5. Riqab: budak yang ingin memerdekakan diri\n6. Gharim: orang yang berutang untuk kepentingan baik\n7. Fisabilillah: pejuang di jalan Allah\n8. Ibnu Sabil: musafir yang kehabisan bekal\n\nZakat harus disalurkan kepada golongan-golongan ini dan tidak boleh diberikan kepada selain mereka.",
    dalil:
      'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ\n\n"Sesungguhnya zakat itu hanyalah untuk orang-orang fakir, orang miskin, amil zakat, yang dilunakkan hatinya (mualaf), untuk (memerdekakan) hamba sahaya, untuk (membebaskan) orang yang berutang, untuk jalan Allah, dan untuk orang yang sedang dalam perjalanan." (QS. At-Taubah: 60)',
    quiz: {
      question: "Berapa golongan yang berhak menerima zakat?",
      options: ["6 golongan", "8 golongan", "10 golongan"],
      correctIndex: 1,
    },
  },
  {
    id: "i1",
    category: "Infak",
    title: "Pengertian Infak",
    durationMin: 4,
    icon: Heart,
    explanation:
      "Infak berasal dari kata 'anfaqa' yang berarti mengeluarkan atau membelanjakan harta. Infak adalah mengeluarkan sebagian harta atau pendapatan untuk suatu kepentingan yang diperintahkan Islam.\n\nInfak berbeda dengan zakat. Jika zakat memiliki aturan khusus tentang nisab, haul, dan mustahik, maka infak lebih fleksibel. Infak dapat diberikan kepada siapa saja yang membutuhkan, kapan saja, dan dalam jumlah berapa saja.\n\nInfak termasuk ibadah yang sangat dianjurkan dan memiliki pahala yang berlipat ganda. Allah menjanjikan akan mengganti harta yang diinfakkan dengan yang lebih baik.",
    dalil:
      'مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ\n\n"Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan bagi siapa yang Dia kehendaki." (QS. Al-Baqarah: 261)',
    quiz: {
      question: "Apa perbedaan utama infak dan zakat?",
      options: [
        "Tidak ada perbedaan",
        "Infak lebih fleksibel tanpa aturan nisab dan haul",
        "Infak hanya untuk fakir miskin",
      ],
      correctIndex: 1,
    },
  },
  {
    id: "i2",
    category: "Infak",
    title: "Keutamaan Berinfak",
    durationMin: 4,
    icon: Heart,
    explanation:
      "Berinfak memiliki banyak keutamaan dalam Islam. Pertama, infak membersihkan harta dan jiwa dari sifat kikir dan cinta dunia yang berlebihan.\n\nKedua, infak menjadi investasi akhirat yang tidak akan pernah rugi. Allah menjanjikan balasan berlipat ganda hingga 700 kali lipat atau lebih.\n\nKetiga, orang yang berinfak akan mendapat perlindungan dari bencana dan kesulitan. Keempat, infak menjadi sebab terkabulnya doa dan dihapuskannya dosa-dosa kecil.\n\nRasulullah SAW bersabda bahwa sedekah (termasuk infak) tidak akan mengurangi harta, bahkan Allah akan menambahkannya.",
    dalil:
      'وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ\n\n"Dan apa saja yang kamu infakkan, Allah akan menggantinya dan Dia adalah pemberi rezeki yang terbaik." (QS. Saba: 39)\n\nمَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ\n\n"Sedekah tidak akan mengurangi harta." (HR. Muslim)',
    quiz: {
      question: "Berapa kali lipat balasan infak yang dijanjikan Allah?",
      options: ["10 kali lipat", "100 kali lipat", "Hingga 700 kali lipat atau lebih"],
      correctIndex: 2,
    },
  },
  {
    id: "i3",
    category: "Infak",
    title: "Adab Berinfak",
    durationMin: 3,
    icon: Heart,
    explanation:
      "Ada beberapa adab penting dalam berinfak. Pertama, ikhlas karena Allah semata, bukan untuk pujian atau pamrih duniawi.\n\nKedua, infak dari harta yang baik dan halal, bukan dari yang buruk atau haram. Ketiga, jangan diikuti dengan menyebut-nyebut pemberian atau menyakiti perasaan penerima.\n\nKeempat, berinfak sesuai kemampuan, tidak perlu memaksakan diri hingga menyusahkan diri sendiri. Kelima, lebih baik berinfak secara sembunyi-sembunyi agar lebih terjaga keikhlasannya.\n\nKeenam, segera berinfak ketika ada kesempatan, jangan menunda-nunda karena kita tidak tahu kapan ajal akan datang.",
    dalil:
      'يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ\n\n"Wahai orang-orang yang beriman, infakkanlah sebagian dari hasil usahamu yang baik-baik." (QS. Al-Baqarah: 267)\n\nالَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً\n\n"Orang-orang yang menginfakkan hartanya di malam dan siang hari secara sembunyi-sembunyi dan terang-terangan." (QS. Al-Baqarah: 274)',
    quiz: {
      question: "Apa adab terpenting dalam berinfak?",
      options: ["Memberikan dalam jumlah besar", "Ikhlas karena Allah semata", "Memberikan secara terang-terangan"],
      correctIndex: 1,
    },
  },
  {
    id: "s1",
    category: "Sedekah",
    title: "Pengertian Sedekah",
    durationMin: 4,
    icon: Lightbulb,
    explanation:
      "Sedekah berasal dari kata 'shadaqa' yang berarti benar atau jujur. Sedekah adalah pemberian sesuatu kepada orang lain dengan mengharap ridha Allah SWT.\n\nSedekah memiliki makna yang lebih luas dari infak. Sedekah tidak hanya berupa harta, tetapi juga bisa berupa perbuatan baik, senyuman, kata-kata yang baik, membantu orang lain, bahkan menahan diri dari perbuatan buruk.\n\nRasulullah SAW bersabda: 'Setiap kebaikan adalah sedekah.' Ini menunjukkan bahwa sedekah mencakup semua bentuk kebaikan, baik yang bersifat materi maupun non-materi.",
    dalil:
      'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ\n\n"Senyummu di hadapan saudaramu adalah sedekah." (HR. Tirmidzi)\n\nكُلُّ مَعْرُوفٍ صَدَقَةٌ\n\n"Setiap kebaikan adalah sedekah." (HR. Bukhari-Muslim)',
    quiz: {
      question: "Apa yang termasuk sedekah selain harta?",
      options: ["Hanya uang dan makanan", "Senyuman dan perbuatan baik", "Hanya doa"],
      correctIndex: 1,
    },
  },
  {
    id: "s2",
    category: "Sedekah",
    title: "Sedekah Jariyah",
    durationMin: 5,
    icon: Lightbulb,
    explanation:
      "Sedekah jariyah adalah sedekah yang pahalanya terus mengalir meskipun pemberinya telah meninggal dunia. Ini adalah investasi akhirat yang paling menguntungkan.\n\nContoh sedekah jariyah: membangun masjid, sekolah, rumah sakit, mencetak Al-Quran, menggali sumur, menanam pohon yang bermanfaat, menulis buku ilmu yang bermanfaat, dan mengajarkan ilmu kepada orang lain.\n\nRasulullah SAW menyebutkan tiga amalan yang tidak terputus pahalanya setelah meninggal: sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakan.\n\nWakaf adalah salah satu bentuk sedekah jariyah yang paling dianjurkan karena aset pokoknya tetap terjaga dan manfaatnya terus berjalan.",
    dalil:
      'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ\n\n"Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak saleh yang mendoakan." (HR. Muslim)',
    quiz: {
      question: "Apa yang dimaksud sedekah jariyah?",
      options: [
        "Sedekah yang diberikan setiap hari",
        "Sedekah yang pahalanya terus mengalir meski telah wafat",
        "Sedekah dalam jumlah besar",
      ],
      correctIndex: 1,
    },
  },
  {
    id: "s3",
    category: "Sedekah",
    title: "Waktu Terbaik Bersedekah",
    durationMin: 3,
    icon: Lightbulb,
    explanation:
      "Sedekah dapat dilakukan kapan saja, namun ada waktu-waktu tertentu yang lebih utama. Pertama, sedekah di bulan Ramadhan memiliki pahala berlipat ganda.\n\nKedua, sedekah di hari Jumat sangat dianjurkan karena merupakan hari yang mulia. Ketiga, sedekah di pagi hari dapat menolak bala dan bencana sepanjang hari.\n\nKeempat, sedekah saat sehat dan kuat lebih utama daripada menunda hingga sakit atau tua. Kelima, sedekah secara rutin meskipun sedikit lebih dicintai Allah daripada sedekah besar yang tidak konsisten.\n\nYang terpenting adalah konsistensi dan keikhlasan, bukan menunggu waktu atau jumlah yang sempurna.",
    dalil:
      'أَفْضَلُ الصَّدَقَةِ أَنْ تَصَدَّقَ وَأَنْتَ صَحِيحٌ شَحِيحٌ تَأْمُلُ الْغِنَى وَتَخْشَى الْفَقْرَ\n\n"Sedekah yang paling utama adalah sedekah yang kamu berikan saat sehat, merasa butuh harta, berharap kaya, dan takut miskin." (HR. Bukhari-Muslim)\n\nأَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ\n\n"Amalan yang paling dicintai Allah adalah yang paling konsisten meskipun sedikit." (HR. Bukhari-Muslim)',
    quiz: {
      question: "Kapan waktu terbaik untuk bersedekah?",
      options: ["Hanya di bulan Ramadhan", "Kapan saja dengan konsisten", "Hanya saat kaya raya"],
      correctIndex: 1,
    },
  },
  {
    id: "w1",
    category: "Wakaf",
    title: "Pengertian Wakaf",
    durationMin: 5,
    icon: Book,
    explanation:
      "Wakaf berasal dari kata 'waqafa' yang berarti menahan atau berhenti. Secara istilah, wakaf adalah menahan aset atau harta benda dan menyalurkan manfaatnya untuk kepentingan umum sesuai syariat Islam.\n\nCiri khas wakaf adalah harta pokoknya tidak boleh dijual, dihibahkan, atau diwariskan. Yang disalurkan hanya manfaat atau hasil dari harta tersebut.\n\nWakaf termasuk sedekah jariyah yang pahalanya terus mengalir. Contoh wakaf: tanah untuk masjid, gedung untuk sekolah, sumur untuk umum, atau uang yang dikelola secara produktif.\n\nDalam perkembangannya, wakaf tidak hanya berupa benda tidak bergerak (tanah, bangunan), tetapi juga benda bergerak seperti uang (wakaf tunai) dan saham.",
    dalil:
      'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ\n\n"Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah (termasuk wakaf), ilmu yang bermanfaat, atau anak saleh yang mendoakan." (HR. Muslim)',
    quiz: {
      question: "Apa yang membedakan wakaf dengan sedekah biasa?",
      options: [
        "Wakaf harus dalam jumlah besar",
        "Wakaf menahan pokok harta dan menyalurkan manfaatnya",
        "Wakaf hanya untuk masjid",
      ],
      correctIndex: 1,
    },
  },
  {
    id: "w2",
    category: "Wakaf",
    title: "Jenis-Jenis Wakaf",
    durationMin: 4,
    icon: Book,
    explanation:
      "Wakaf dibagi menjadi beberapa jenis. Pertama, wakaf ahli (dzurri) yaitu wakaf yang ditujukan untuk keluarga atau keturunan wakif terlebih dahulu, baru sisanya untuk umum.\n\nKedua, wakaf khairi yaitu wakaf yang langsung ditujukan untuk kepentingan umum seperti masjid, sekolah, rumah sakit, dan panti asuhan.\n\nKetiga, berdasarkan bentuknya ada wakaf benda tidak bergerak (tanah, bangunan) dan wakaf benda bergerak seperti uang (wakaf tunai) dan saham.\n\nWakaf tunai atau wakaf uang adalah inovasi modern yang memudahkan masyarakat berwakaf. Uang wakaf dikelola secara produktif dan hasilnya disalurkan untuk kepentingan umum, sementara pokok uangnya tetap terjaga.",
    dalil:
      'لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ\n\n"Kamu tidak akan memperoleh kebajikan sebelum kamu menginfakkan sebagian harta yang kamu cintai." (QS. Ali Imran: 92)\n\nعَنْ عُمَرَ رَضِيَ اللَّهُ عَنْهُ: "تَصَدَّقْ بِأَصْلِهَا لَا يُبَاعُ وَلَا يُورَثُ"\n\n"Sedekahkan (wakafkan) asal hartanya, tidak dijual dan tidak diwariskan." (HR. Bukhari-Muslim)',
    quiz: {
      question: "Apa yang dimaksud wakaf tunai?",
      options: ["Wakaf berupa uang yang dikelola produktif", "Wakaf yang dibayar tunai", "Wakaf untuk keluarga"],
      correctIndex: 0,
    },
  },
  {
    id: "w3",
    category: "Wakaf",
    title: "Manfaat dan Hikmah Wakaf",
    durationMin: 4,
    icon: Book,
    explanation:
      "Wakaf memiliki banyak manfaat dan hikmah. Pertama, wakaf menjadi investasi akhirat yang tidak akan pernah putus pahalanya selama harta wakaf masih bermanfaat.\n\nKedua, wakaf membantu pembangunan fasilitas umum seperti masjid, sekolah, rumah sakit, dan infrastruktur yang bermanfaat bagi masyarakat luas.\n\nKetiga, wakaf produktif dapat menjadi sumber dana berkelanjutan untuk program-program sosial dan pendidikan. Keempat, wakaf membantu pemerataan ekonomi dan mengurangi kesenjangan sosial.\n\nKelima, wakaf mengajarkan kita untuk tidak terlalu cinta pada harta dunia dan lebih mementingkan kehidupan akhirat. Keenam, wakaf menjadi bukti kepedulian kita terhadap generasi mendatang.",
    dalil:
      'مَنْ بَنَى مَسْجِدًا يَبْتَغِي بِهِ وَجْهَ اللَّهِ بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ\n\n"Barangsiapa membangun masjid karena Allah, maka Allah akan membangunkan untuknya (rumah) yang serupa di surga." (HR. Bukhari-Muslim)\n\nخَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ\n\n"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya." (HR. Thabrani)',
    quiz: {
      question: "Apa hikmah utama dari wakaf?",
      options: [
        "Mendapat pujian dari orang lain",
        "Pahala terus mengalir dan bermanfaat untuk umum",
        "Mengurangi pajak",
      ],
      correctIndex: 1,
    },
  },
]

const CATEGORIES: Category[] = ["Zakat", "Infak", "Sedekah", "Wakaf"]

export default function EdukasiPage() {
  // search & filter
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState<Category>("Zakat")

  // completion & XP
  const [completedIds, setCompletedIds] = React.useState<string[]>([])
  const [xp, setXp] = React.useState(0)

  // streak
  const [streak, setStreak] = React.useState(1)

  // dialog state
  const [activeId, setActiveId] = React.useState<string | null>(null)

  // load persisted state
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("edukasi_state_v1")
      if (raw) {
        const parsed = JSON.parse(raw)
        setCompletedIds(parsed.completedIds ?? [])
        setXp(parsed.xp ?? 0)
        setStreak(parsed.streak ?? 1)
      }
      // streak update (simple heuristic)
      const last = localStorage.getItem("edukasi_last_open")
      const today = new Date().toDateString()
      if (last) {
        if (last !== today) {
          const prev = Number(localStorage.getItem("edukasi_streak") ?? "0")
          const next = Math.max(1, prev + 1)
          setStreak(next)
          localStorage.setItem("edukasi_streak", String(next))
        } else {
          const keep = Number(localStorage.getItem("edukasi_streak") ?? "1")
          setStreak(Math.max(1, keep))
        }
      } else {
        localStorage.setItem("edukasi_streak", "1")
      }
      localStorage.setItem("edukasi_last_open", today)
    } catch {
      // ignore
    }
  }, [])

  // persist
  React.useEffect(() => {
    try {
      localStorage.setItem("edukasi_state_v1", JSON.stringify({ completedIds, xp, streak }))
    } catch {
      // ignore
    }
  }, [completedIds, xp, streak])

  const filtered = React.useMemo(() => {
    const inCat = MODULES.filter((m) => m.category === category)
    if (!query.trim()) return inCat
    const q = query.toLowerCase()
    return inCat.filter((m) => m.title.toLowerCase().includes(q))
  }, [category, query])

  const totalInCat = MODULES.filter((m) => m.category === category).length
  const completedInCat = MODULES.filter((m) => m.category === category && completedIds.includes(m.id)).length
  const progressPct = Math.round((completedInCat / Math.max(1, totalInCat)) * 100)

  const motivation =
    progressPct >= 80
      ? "MasyaAllah, hampir tamat! Satu modul lagi!"
      : progressPct >= 40
        ? "MasyaAllah, tinggal beberapa modul lagi untuk menamatkan bab ini!"
        : "Ayo mulai modul pertama hari ini!"

  const openModule = (id: string) => setActiveId(id)
  const closeDialog = () => setActiveId(null)

  const activeDetail: ModuleDetail | null = React.useMemo(() => {
    if (!activeId) return null
    const base = MODULES.find((m) => m.id === activeId)
    if (!base) return null
    return {
      id: base.id,
      title: base.title,
      explanation: base.explanation,
      dalil: base.dalil,
      quiz: base.quiz,
    }
  }, [activeId])

  const handleCompleted = (id: string) => {
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setXp((x) => x + 10)
  }

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto max-w-screen-sm px-4 pb-28 pt-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-balance text-3xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Belajar ZISWAF dengan Birru 📚
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Pelajari Zakat, Infak, Sedekah, dan Wakaf secara ringkas dan aplikatif dengan dalil yang jelas.
          </p>
        </header>

        {/* Search + Filter */}
        <section className="mb-6 grid gap-3" aria-label="Pencarian dan Filter">
          <div className="relative">
            <Book className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari materi (contoh: Zakat Mal, Sedekah Jariyah)"
              className="pl-10 h-12 rounded-xl border-2 focus:border-primary transition-colors"
              aria-label="Cari materi"
            />
          </div>
          <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
            <TabsList className="grid grid-cols-4 w-full h-12 rounded-xl">
              {CATEGORIES.map((c) => (
                <TabsTrigger key={c} value={c} className="rounded-lg font-semibold">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </section>

        {/* Progress Belajar */}
        <section className="mb-6 grid gap-3" aria-label="Progress Belajar">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="h-4 w-4" aria-hidden="true" />
                Progress {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {completedInCat} dari {totalInCat} modul
                </p>
                <Badge variant="secondary" className="gap-1">
                  <Award className="h-3 w-3" aria-hidden="true" /> {xp} XP
                </Badge>
              </div>
              <Progress value={progressPct} aria-label="Progress belajar" />
              <p className="text-sm">{motivation}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Flame className="h-4 w-4" aria-hidden="true" />
                Streak belajar: <span className="font-medium">{streak} hari</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Materi Inti */}
        <section className="mb-6" aria-label="Materi Inti">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Materi {category}</h2>
            <span className="text-xs text-muted-foreground">{filtered.length} modul</span>
          </div>
          <div className="grid gap-3">
            {filtered.map((item) => (
              <ModuleCard key={item.id} item={item} onStart={openModule} />
            ))}
          </div>
        </section>

        {/* Gamifikasi: Challenge (tanpa leaderboard) */}
        <section className="mb-6" aria-label="Gamifikasi">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-base">Tantangan Minggu Ini</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="text-sm">
                Selesaikan 3 modul <span className="font-medium">Wakaf</span> minggu ini, raih badge{" "}
                <span className="font-medium">Penjaga Amal</span>.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                Kemajuan: {MODULES.filter((m) => m.category === "Wakaf" && completedIds.includes(m.id)).length}/3
              </div>
              <Progress
                value={Math.min(
                  100,
                  (MODULES.filter((m) => m.category === "Wakaf" && completedIds.includes(m.id)).length / 3) * 100,
                )}
                aria-label="Progress tantangan"
              />
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mb-6" aria-label="Ajak Beramal">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-base">Siap Mengamalkan?</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <p className="text-sm">Sudah belajar zakat fitrah? Yuk, hitung zakatmu dengan kalkulator Birru!</p>
              <div className="grid grid-cols-2 gap-2">
                <Button asChild>
                  <Link href="/zakat">Kalkulator Zakat</Link>
                </Button>
                <Button asChild>
                  <Link href="/infak">Form Infak</Link>
                </Button>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-2">
                <Button asChild>
                  <Link href="/wakaf">Form Wakaf</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/">Kembali</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-6 text-center text-xs text-muted-foreground"></footer>

        <ModuleDialog
          open={!!activeId}
          onOpenChange={(o) => (o ? null : closeDialog())}
          detail={activeDetail}
          onCompleted={handleCompleted}
        />
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

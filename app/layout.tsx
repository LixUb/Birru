import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import BottomNav from "@/components/birru/bottom-nav"
import AIChatDialog from "@/components/birru/ai-chat-dialog"
import "./globals.css"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BIRRU - Platform Edukasi & Pengelolaan ZISWAF",
  description: "Platform modern untuk edukasi dan pengelolaan Zakat, Infak, Sedekah, dan Wakaf",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${poppins.variable} ${inter.variable}`}>
        <Suspense fallback={null}>
          {children}
          <BottomNav />
          <AIChatDialog />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
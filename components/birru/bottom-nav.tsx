"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Book, Calculator, HandHeart, Landmark } from "lucide-react"

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    null
  )
}

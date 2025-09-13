"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Calculator, Brain, Target } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Prediksi", href: "#prediction", icon: Calculator },
    { name: "Optimasi", href: "#optimization", icon: Target },
    { name: "Edukasi", href: "#education", icon: Brain },
  ]

  return (
    <header
      className={`border-b border-green-100 sticky top-0 z-50 transition-all duration-300 ${
        isHovered 
          ? "bg-white backdrop-blur-md" 
          : isScrolled 
          ? "bg-white/20 backdrop-blur-md" 
          : "bg-white/95 backdrop-blur-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo kiri dengan ukuran tetap */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png" // path langsung dari public/logo.png
              alt="Logo"
              width={40} // ukuran lebih besar, bisa disesuaikan
              height={40} // ukuran lebih besar, bisa disesuaikan
              className="object-contain"
              priority // untuk loading yang lebih cepat
            />
          </div>
          {/* Navbar tengah (desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              )
            })}
          </div>
          {/* Hamburger button mobile kanan */}
          <div className="flex md:hidden ml-auto">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

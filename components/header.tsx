"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, Calculator, Brain, Target } from "lucide-react"

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
        {/* Gunakan flex agar hamburger selalu di kanan */}
        <div className="flex items-center h-16">
          {/* Logo kiri */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-200 rounded-lg flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary font-[family-name:var(--font-montserrat)]">
              methalyst
            </span>
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
        {/* Mobile Menu tanpa "Mulai Prediksi" */}
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

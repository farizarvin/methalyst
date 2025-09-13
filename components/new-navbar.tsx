"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, Calculator, Target, BookOpen } from "lucide-react"

export function NewNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Prediksi STY", href: "#prediction", icon: Calculator },
    { name: "Optimasi", href: "#optimization", icon: Target },
    { name: "Edukasi", href: "#education", icon: BookOpen },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary font-[family-name:var(--font-montserrat)]">
              CO₂ Predictor
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 ml-8">
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
          {/* CTA Button & Hamburger right-aligned */}
          <div className="flex items-center ml-auto">
            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Mulai Prediksi
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
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
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Mulai Prediksi
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

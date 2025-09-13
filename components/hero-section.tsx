"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Leaf, Zap, Beaker, TrendingUp, Computer, Server, Atom } from "lucide-react"
import { Typewriter } from 'react-simple-typewriter'

export function HeroSection() {
  return (
    <section id="home" className="relative py-24 px-4 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-emerald-50/30 to-teal-100/50" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-55 h-55 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border border-green-200/50 group-hover:scale-105 transition-transform duration-300">
              <div className="w-43 h-43 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full flex items-center justify-center">
                <Leaf className="w-31 h-31 text-green-600 animate-pulse" />
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-5 -right-12 w-22 h-22 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Atom className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -bottom-10 -left-14 w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
              <Beaker className="w-15 h-15 text-white" />
            </div>
            <div className="absolute top-2 -left-15 w-18 h-18 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
              <TrendingUp className="w-14 h-14 text-white" />
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-montserrat)] leading-tight">
          <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Transform CO₂
          </span>
          <br />
          <span className="text-gray-800">to Green Fuel</span>
          <br />
          {/* Efek Typewriter */}
          <span className="text-2xl md:text-4xl bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent font-medium">
            <Typewriter
              words={[
                "Explore new ideas.",
                "Predict with AI.",
                "Make real impact.",
                "Optimize your yield.",
                "Simulate CO₂–>Methanol.",
                "Reduce emissions now.",
                "Go green together.",
                "Smart fuel innovation.",
                "Catalyst your process.",
                "Green future starts.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={75}
              deleteSpeed={45}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className="pt-12" />
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-[family-name:var(--font-poppins)] leading-relaxed">
          Platform AI terdepan untuk simulasi katalis CO₂ ke metanol dengan prediksi akurat dan analisis dampak
          lingkungan real-time.
        </p>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <Button
    size="lg"
    className="text-lg px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
  >
    <a href="#prediction">mulai prediksi</a>
    <ArrowDown className="ml-3 h-5 w-5 animate-bounce" />
  </Button>
  <Button 
    variant="outline" 
    size="lg" 
    className="text-lg px-10 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
  >
    <a href="#information">FAQ</a>
  </Button>
</div>




        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">93%+</div>
            <div className="text-gray-600">Akurasi Prediksi</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="text-3xl font-bold text-teal-600 mb-2">50%</div>
            <div className="text-gray-600">Pengurangan Emisi</div>
          </div>
        </div>
      </div>
    </section>
  )
}

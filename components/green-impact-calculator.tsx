"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Factory, TrendingUp } from "lucide-react"

export function GreenImpactCalculator() {
  const [sty, setSTY] = useState("0.83")
  const [operationTime, setOperationTime] = useState("8760") // hours per year
  const [reactorMass, setReactorMass] = useState("100") // kg catalyst
  const [results, setResults] = useState({
    co2Converted: 0,
    methanolProduced: 0,
    co2Saved: 0,
    treesEquivalent: 0,
  })

  const [animatedResults, setAnimatedResults] = useState({
    co2Converted: 0,
    methanolProduced: 0,
    co2Saved: 0,
    treesEquivalent: 0,
  })

  const calculateImpact = () => {
    const styValue = Number.parseFloat(sty) || 0
    const timeValue = Number.parseFloat(operationTime) || 0
    const massValue = Number.parseFloat(reactorMass) || 0

    // Calculations based on stoichiometry: CO2 + 3H2 → CH3OH + H2O
    const methanolProduced = (styValue * timeValue * massValue) / 1000 // kg/year
    const co2Converted = methanolProduced * (44.01 / 32.04) // kg CO2/year (molecular weight ratio)
    const co2Saved = co2Converted // Assuming all converted CO2 is saved from atmosphere
    const treesEquivalent = co2Saved / 22 // Average tree absorbs ~22 kg CO2/year

    setResults({
      co2Converted: co2Converted,
      methanolProduced: methanolProduced,
      co2Saved: co2Saved,
      treesEquivalent: treesEquivalent,
    })
  }

  // Animate numbers
  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedResults({
        co2Converted: results.co2Converted * progress,
        methanolProduced: results.methanolProduced * progress,
        co2Saved: results.co2Saved * progress,
        treesEquivalent: results.treesEquivalent * progress,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedResults(results)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [results])

  return (
    <section id="impact" className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
            Green Impact Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hitung dampak lingkungan positif dari konversi CO₂ menjadi metanol
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Input Parameters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-primary" />
                Operation Parameters
              </CardTitle>
              <CardDescription>Masukkan parameter operasi untuk menghitung dampak lingkungan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sty-input">STY [mgMeOH h⁻¹ gcat⁻¹]</Label>
                  <Input
                    id="sty-input"
                    type="number"
                    value={sty}
                    onChange={(e) => setSTY(e.target.value)}
                    step="0.001"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-input">Operation Time [hours/year]</Label>
                  <Input
                    id="time-input"
                    type="number"
                    value={operationTime}
                    onChange={(e) => setOperationTime(e.target.value)}
                    min="1"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mass-input">Catalyst Mass [kg]</Label>
                  <Input
                    id="mass-input"
                    type="number"
                    value={reactorMass}
                    onChange={(e) => setReactorMass(e.target.value)}
                    min="0.1"
                    step="0.1"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Button onClick={calculateImpact} size="lg" className="px-8">
                  Calculate Environmental Impact
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Impact Results */}
          {results.co2Converted > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {animatedResults.methanolProduced.toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">kg Methanol/year</div>
                  <Badge variant="secondary" className="mt-2">
                    Produced
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="pt-6">
                  <Factory className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {animatedResults.co2Converted.toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">kg CO₂/year</div>
                  <Badge variant="secondary" className="mt-2">
                    Converted
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-to-br from-green-100 to-green-50 border-green-200">
                <CardContent className="pt-6">
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-600 mb-2">{animatedResults.co2Saved.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">kg CO₂/year</div>
                  <Badge variant="secondary" className="mt-2">
                    Saved
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">
                    {animatedResults.treesEquivalent.toFixed(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Trees Equivalent</div>
                  <Badge variant="secondary" className="mt-2">
                    Impact
                  </Badge>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Impact Visualization */}
          {results.co2Converted > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact Summary</CardTitle>
                <CardDescription>Dampak positif dari operasi konversi CO₂ menjadi metanol</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    🌍 Anda telah menyelamatkan {animatedResults.co2Saved.toFixed(1)} ton CO₂ dari atmosfer!
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏭</div>
                      <div className="text-sm text-muted-foreground">
                        Setara dengan menghentikan emisi dari {(animatedResults.co2Saved / 4600).toFixed(1)} mobil
                        selama 1 tahun
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌳</div>
                      <div className="text-sm text-muted-foreground">
                        Setara dengan menanam {animatedResults.treesEquivalent.toFixed(0)} pohon dewasa
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">⚡</div>
                      <div className="text-sm text-muted-foreground">
                        Menghasilkan {animatedResults.methanolProduced.toFixed(1)} kg bahan bakar hijau per tahun
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Badge variant="outline" className="text-lg px-6 py-2">
                    Carbon Negative Process ✅
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

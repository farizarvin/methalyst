"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Loader2, Target, Lightbulb } from "lucide-react"

interface OptimizationResult {
  parameter: string
  currentValue: string
  recommendedRange: string
  impact: string
  priority: "high" | "medium" | "low"
}

export function OptimizationPanel() {
  const [targetSTY, setTargetSTY] = useState("")
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [results, setResults] = useState<OptimizationResult[]>([])

  const handleOptimize = async () => {
    if (!targetSTY) return

    setIsOptimizing(true)

    // Simulate optimization calculation
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const mockResults: OptimizationResult[] = [
      {
        parameter: "Metal Loading",
        currentValue: "5.0 wt%",
        recommendedRange: "6.5-8.0 wt%",
        impact: "+18% STY improvement",
        priority: "high",
      },
      {
        parameter: "Promoter 1 Loading",
        currentValue: "2.0 wt%",
        recommendedRange: "2.8-3.5 wt%",
        impact: "+14% STY improvement",
        priority: "high",
      },
      {
        parameter: "GHSV",
        currentValue: "3600 cm³ h⁻¹ gcat⁻¹",
        recommendedRange: "4200-4800 cm³ h⁻¹ gcat⁻¹",
        impact: "+15% STY improvement",
        priority: "high",
      },
      {
        parameter: "Temperature",
        currentValue: "523 K",
        recommendedRange: "540-550 K",
        impact: "+12% STY improvement",
        priority: "high",
      },
      {
        parameter: "SBET",
        currentValue: "150 m² g⁻¹",
        recommendedRange: "180-220 m² g⁻¹",
        impact: "+8% STY improvement",
        priority: "medium",
      },
      {
        parameter: "H₂/CO₂ Ratio",
        currentValue: "3.0",
        recommendedRange: "3.2-3.5",
        impact: "+5% STY improvement",
        priority: "medium",
      },
      {
        parameter: "Pressure",
        currentValue: "3.0 MPa",
        recommendedRange: "4.0-5.0 MPa",
        impact: "+6% STY improvement",
        priority: "medium",
      },
      {
        parameter: "Calcination Temperature",
        currentValue: "773 K",
        recommendedRange: "823-873 K",
        impact: "+4% STY improvement",
        priority: "low",
      },
      {
        parameter: "Calcination Duration",
        currentValue: "4.0 h",
        recommendedRange: "5.0-6.0 h",
        impact: "+3% STY improvement",
        priority: "low",
      },
      {
        parameter: "Catalyst Amount",
        currentValue: "0.5 g",
        recommendedRange: "0.6-0.8 g",
        impact: "+2% STY improvement",
        priority: "low",
      },
    ]

    setResults(mockResults)
    setIsOptimizing(false)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="optimization" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
            Optimization Panel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dapatkan rekomendasi parameter optimal untuk mencapai target STY yang diinginkan
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Target Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Target STY
              </CardTitle>
              <CardDescription>
                Masukkan target STY yang ingin dicapai untuk mendapatkan rekomendasi optimasi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="target-sty">Target STY [mgMeOH h⁻¹ gcat⁻¹]</Label>
                  <Input
                    id="target-sty"
                    type="number"
                    value={targetSTY}
                    onChange={(e) => setTargetSTY(e.target.value)}
                    placeholder="e.g., 1.2"
                    min="0.1"
                    max="3.0"
                    step="0.1"
                  />
                </div>
                <Button onClick={handleOptimize} disabled={!targetSTY || isOptimizing} size="lg" className="px-8">
                  {isOptimizing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    "Find Optimal Conditions"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Results */}
          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  Optimization Recommendations
                </CardTitle>
                <CardDescription>
                  Rekomendasi parameter untuk mencapai target STY {targetSTY} mgMeOH h⁻¹ gcat⁻¹
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={result.parameter}
                      className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-foreground">{result.parameter}</h4>
                            <Badge className={getPriorityColor(result.priority)}>{result.priority} priority</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              <span className="font-medium">Current:</span> {result.currentValue}
                            </p>
                            <p>
                              <span className="font-medium">Recommended:</span> {result.recommendedRange}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-primary">{result.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Optimization Summary</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Dengan menerapkan semua rekomendasi di atas, prediksi peningkatan STY total adalah{" "}
                    <strong>~87%</strong> dari kondisi saat ini.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      Estimated STY: {(Number.parseFloat(targetSTY) * 0.85).toFixed(2)} - {targetSTY}
                    </Badge>
                    <Badge variant="outline">Confidence: 89%</Badge>
                    <Badge variant="outline">Implementation Cost: Medium-High</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

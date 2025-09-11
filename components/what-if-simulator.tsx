"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { TrendingUp, GitCompare } from "lucide-react"

export function WhatIfSimulator() {
  const [temperature, setTemperature] = useState([523])
  const [pressure, setPressure] = useState([3])
  const [h2Co2Ratio, setH2Co2Ratio] = useState([3])

  // Generate mock data based on parameters
  const generateData = () => {
    const baseSTY = 0.8
    const tempFactor = ((temperature[0] - 473) / 100) * 0.3
    const pressureFactor = ((pressure[0] - 1) / 9) * 0.2
    const ratioFactor = Math.sin(((h2Co2Ratio[0] - 1) / 5) * Math.PI) * 0.15

    return Array.from({ length: 20 }, (_, i) => ({
      time: i + 1,
      sty: Math.max(0.1, baseSTY + tempFactor + pressureFactor + ratioFactor + (Math.random() - 0.5) * 0.1),
      scenario: "Current",
    }))
  }

  const data = generateData()
  const currentSTY = data[data.length - 1]?.sty || 0

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
            Live "What If" Simulator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi real-time bagaimana perubahan parameter mempengaruhi prediksi STY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Parameter Controls
              </CardTitle>
              <CardDescription>Sesuaikan parameter dan lihat perubahan prediksi secara real-time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Temperature [K]: {temperature[0]}</Label>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  min={473}
                  max={573}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Label>Pressure [MPa]: {pressure[0]}</Label>
                <Slider value={pressure} onValueChange={setPressure} min={1} max={10} step={0.5} className="w-full" />
              </div>

              <div className="space-y-3">
                <Label>H₂/CO₂ Ratio: {h2Co2Ratio[0]}</Label>
                <Slider
                  value={h2Co2Ratio}
                  onValueChange={setH2Co2Ratio}
                  min={1}
                  max={6}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="pt-4 border-t">
                <div className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Current STY: {currentSTY.toFixed(3)} mgMeOH h⁻¹ gcat⁻¹
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chart Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitCompare className="h-5 w-5 text-secondary" />
                Real-time Prediction
              </CardTitle>
              <CardDescription>Grafik menunjukkan tren STY berdasarkan parameter yang dipilih</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      domain={["dataMin - 0.1", "dataMax + 0.1"]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sty"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                    <ReferenceLine y={0.8} stroke="hsl(var(--secondary))" strokeDasharray="5 5" label="Target" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scenario Comparison */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Scenario Comparison</CardTitle>
            <CardDescription>Bandingkan dua set parameter yang berbeda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Scenario A (Current)</h4>
                <div className="space-y-1 text-sm">
                  <p>Temperature: {temperature[0]} K</p>
                  <p>Pressure: {pressure[0]} MPa</p>
                  <p>H₂/CO₂: {h2Co2Ratio[0]}</p>
                  <p className="font-semibold text-primary">STY: {currentSTY.toFixed(3)} mgMeOH h⁻¹ gcat⁻¹</p>
                </div>
              </div>

              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Scenario B (Optimized)</h4>
                <div className="space-y-1 text-sm">
                  <p>Temperature: 543 K</p>
                  <p>Pressure: 4.5 MPa</p>
                  <p>H₂/CO₂: 3.2</p>
                  <p className="font-semibold text-secondary">STY: 0.952 mgMeOH h⁻¹ gcat⁻¹</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

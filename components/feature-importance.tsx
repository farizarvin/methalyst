"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Brain, Info } from "lucide-react"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const featureData = [
  {
    feature: "GHSV",
    importance: 0.28,
    description: "Gas Hourly Space Velocity memiliki pengaruh terbesar terhadap STY",
  },
  { feature: "SBET", importance: 0.24, description: "Surface area katalis sangat mempengaruhi aktivitas katalitik" },
  { feature: "Temperature", importance: 0.18, description: "Suhu operasi menentukan laju reaksi dan selektivitas" },
  { feature: "H₂/CO₂ Ratio", importance: 0.15, description: "Rasio reaktan mempengaruhi kesetimbangan reaksi" },
  { feature: "Pressure", importance: 0.08, description: "Tekanan operasi mempengaruhi konversi CO₂" },
  { feature: "Metal Loading", importance: 0.07, description: "Loading logam aktif menentukan jumlah situs aktif" },
]

export function FeatureImportance() {
  return (
    <TooltipProvider>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
              Feature Importance & Model Explanation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Analisis kontribusi setiap parameter terhadap prediksi STY berdasarkan model machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Feature Importance Ranking
                </CardTitle>
                <CardDescription>Urutan parameter berdasarkan pengaruhnya terhadap prediksi STY</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={featureData}
                      layout="horizontal"
                      margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" domain={[0, 0.3]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis
                        type="category"
                        dataKey="feature"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        width={70}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Importance"]}
                      />
                      <Bar dataKey="importance" fill="url(#importanceGradient)" radius={[0, 4, 4, 0]} />
                      <defs>
                        <linearGradient id="importanceGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Feature Details */}
            <Card>
              <CardHeader>
                <CardTitle>Parameter Analysis</CardTitle>
                <CardDescription>Penjelasan detail pengaruh setiap parameter terhadap STY</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {featureData.map((item, index) => (
                  <div key={item.feature} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{item.feature}</span>
                        <UITooltip>
                          <TooltipTrigger>
                            <Info className="h-3 w-3 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{item.description}</p>
                          </TooltipContent>
                        </UITooltip>
                      </div>
                      <span className="text-sm font-semibold text-primary">{(item.importance * 100).toFixed(1)}%</span>
                    </div>
                    <Progress value={item.importance * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Model Explanation */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Model Insights</CardTitle>
              <CardDescription>Penjelasan hasil analisis berdasarkan data yang digunakan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-3">Key Findings:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>GHSV dan SBET</strong> adalah parameter paling menentukan output STY dengan kontribusi
                      gabungan {">"}50%
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Suhu operasi</strong> memiliki pengaruh non-linear dengan optimum di sekitar 540-550K
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Rasio H₂/CO₂</strong> optimal berada di range 3.0-3.5 untuk maksimalisasi STY
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-chart-4 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Tekanan dan Metal Loading</strong> memiliki pengaruh lebih kecil namun tetap signifikan
                      untuk optimasi
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  )
}

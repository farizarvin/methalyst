"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Loader2, Info, Beaker, Upload, Edit } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PredictionResult {
  sty: number
  confidence: number
}

export function PredictionForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [batchResults, setBatchResults] = useState<PredictionResult[]>([])
  const [formData, setFormData] = useState({
    metalLoading: 5,
    promoterLoading: 2,
    calcinationTemp: 773,
    calcinationDuration: 4,
    sbet: 150,
    h2Co2Ratio: 3,
    ghsv: 3600,
    catalystAmount: 0.5,
    pressure: 3,
    temperature: 523,
  })

  const handlePredict = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock prediction result
    const mockSty = 0.83 + (Math.random() - 0.5) * 0.3
    setResult({
      sty: Math.max(0.1, mockSty),
      confidence: 0.85 + Math.random() * 0.1,
    })
    setIsLoading(false)
  }

  const handleBatchPredict = async () => {
    setIsLoading(true)
    // Simulate batch processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock batch results
    const mockResults = Array.from({ length: 5 }, (_, i) => ({
      sty: 0.7 + Math.random() * 0.4,
      confidence: 0.8 + Math.random() * 0.15,
    }))
    setBatchResults(mockResults)
    setIsLoading(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("File uploaded:", file.name)
      // Handle CSV file processing here
    }
  }

  return (
    <TooltipProvider>
      <section id="prediction" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
              Simulasi Prediksi STY
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Masukkan parameter katalis dan kondisi operasi untuk memprediksi Space Time Yield (STY) metanol
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="h-5 w-5 text-primary" />
                Parameter Input
              </CardTitle>
              <CardDescription>Pilih metode input: manual atau batch upload CSV</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="manual" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual" className="flex items-center gap-2">
                    <Edit className="h-4 w-4" />
                    Input Manual
                  </TabsTrigger>
                  <TabsTrigger value="csv" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Upload CSV
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="manual" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Metal Loading */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="metal-loading">Metal Loading [wt%]</Label>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Persentase berat logam aktif dalam katalis</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="metal-loading"
                        type="number"
                        value={formData.metalLoading}
                        onChange={(e) => setFormData({ ...formData, metalLoading: Number(e.target.value) })}
                        min={1}
                        max={20}
                        step={0.5}
                      />
                    </div>

                    {/* Promoter Loading */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="promoter-loading">Promoter 1 Loading [wt%]</Label>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Persentase berat promoter dalam katalis</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="promoter-loading"
                        type="number"
                        value={formData.promoterLoading}
                        onChange={(e) => setFormData({ ...formData, promoterLoading: Number(e.target.value) })}
                        min={0}
                        max={10}
                        step={0.1}
                      />
                    </div>

                    {/* Calcination Temperature */}
                    <div className="space-y-2">
                      <Label htmlFor="calc-temp">Calcination Temperature [K]</Label>
                      <Input
                        id="calc-temp"
                        type="number"
                        value={formData.calcinationTemp}
                        onChange={(e) => setFormData({ ...formData, calcinationTemp: Number(e.target.value) })}
                        min={573}
                        max={1073}
                      />
                    </div>

                    {/* Calcination Duration */}
                    <div className="space-y-2">
                      <Label htmlFor="calc-duration">Calcination Duration [h]</Label>
                      <Input
                        id="calc-duration"
                        type="number"
                        value={formData.calcinationDuration}
                        onChange={(e) => setFormData({ ...formData, calcinationDuration: Number(e.target.value) })}
                        min={1}
                        max={12}
                      />
                    </div>

                    {/* SBET */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="sbet">SBET [m² g⁻¹]</Label>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Specific surface area menggunakan metode BET</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="sbet"
                        type="number"
                        value={formData.sbet}
                        onChange={(e) => setFormData({ ...formData, sbet: Number(e.target.value) })}
                        min={50}
                        max={500}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="h2-co2">H₂/CO₂ [-]</Label>
                      <Input
                        id="h2-co2"
                        type="number"
                        value={formData.h2Co2Ratio}
                        onChange={(e) => setFormData({ ...formData, h2Co2Ratio: Number(e.target.value) })}
                        min={1}
                        max={6}
                        step={0.1}
                      />
                    </div>

                    {/* GHSV */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="ghsv">GHSV [cm³ h⁻¹ gcat⁻¹]</Label>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Gas Hourly Space Velocity</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="ghsv"
                        type="number"
                        value={formData.ghsv}
                        onChange={(e) => setFormData({ ...formData, ghsv: Number(e.target.value) })}
                        min={1000}
                        max={10000}
                      />
                    </div>

                    {/* Catalyst Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="catalyst-amount">Catalyst Amount [g]</Label>
                      <Input
                        id="catalyst-amount"
                        type="number"
                        value={formData.catalystAmount}
                        onChange={(e) => setFormData({ ...formData, catalystAmount: Number(e.target.value) })}
                        min={0.1}
                        max={2}
                        step={0.1}
                      />
                    </div>

                    {/* Pressure */}
                    <div className="space-y-2">
                      <Label htmlFor="pressure">Pressure [MPa]</Label>
                      <Input
                        id="pressure"
                        type="number"
                        value={formData.pressure}
                        onChange={(e) => setFormData({ ...formData, pressure: Number(e.target.value) })}
                        min={1}
                        max={10}
                      />
                    </div>

                    {/* Temperature */}
                    <div className="space-y-2">
                      <Label htmlFor="temperature">Temperature [K]</Label>
                      <Input
                        id="temperature"
                        type="number"
                        value={formData.temperature}
                        onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                        min={473}
                        max={573}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button onClick={handlePredict} disabled={isLoading} size="lg" className="px-12">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Predicting...
                        </>
                      ) : (
                        "Predict STY"
                      )}
                    </Button>
                  </div>

                  {result && (
                    <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            Prediksi STY: {result.sty.toFixed(3)} mgMeOH h⁻¹ gcat⁻¹
                          </h3>
                          <Badge variant="secondary" className="mb-4">
                            Confidence: {(result.confidence * 100).toFixed(1)}%
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            Hasil prediksi berdasarkan model machine learning yang telah dilatih dengan data
                            eksperimental
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="csv" className="space-y-6 mt-6">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Upload CSV File</h3>
                    <p className="text-muted-foreground mb-4">
                      Upload file CSV dengan parameter katalis untuk prediksi batch
                    </p>
                    <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" id="csv-upload" />
                    <label htmlFor="csv-upload">
                      <Button variant="outline" className="cursor-pointer bg-transparent">
                        Pilih File CSV
                      </Button>
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      Format: Metal Loading, Promoter Loading, Calc Temp, Calc Duration, SBET, H2/CO2, GHSV, Catalyst
                      Amount, Pressure, Temperature
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleBatchPredict} disabled={isLoading} size="lg" className="px-12">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing Batch...
                        </>
                      ) : (
                        "Process Batch Prediction"
                      )}
                    </Button>
                  </div>

                  {batchResults.length > 0 && (
                    <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold text-primary mb-4 text-center">Batch Prediction Results</h3>
                        <div className="space-y-2">
                          {batchResults.map((result, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                              <span className="font-medium">Sample {index + 1}</span>
                              <div className="text-right">
                                <div className="font-semibold text-primary">
                                  {result.sty.toFixed(3)} mgMeOH h⁻¹ gcat⁻¹
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {(result.confidence * 100).toFixed(1)}% confidence
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  )
}

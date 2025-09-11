"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PredictionForm } from "@/components/prediction-form"
import { WhatIfSimulator } from "@/components/what-if-simulator"
import { BatchUpload } from "@/components/batch-upload"
import { FeatureImportance } from "@/components/feature-importance"
import { OptimizationPanel } from "@/components/optimization-panel"
import { GreenImpactCalculator } from "@/components/green-impact-calculator"
import { EducationPanel } from "@/components/education-panel"
import { Calculator, TrendingUp, Upload, BarChart3, Settings, Leaf, BookOpen } from "lucide-react"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("predict")

  const tabs = [
    {
      id: "predict",
      label: "Prediksi STY",
      icon: Calculator,
      description: "Prediksi Space Time Yield CO₂ ke Metanol",
      component: <PredictionForm />,
    },
    {
      id: "simulator",
      label: "Simulator",
      icon: TrendingUp,
      description: "Simulasi What-If Scenarios",
      component: <WhatIfSimulator />,
    },
    {
      id: "batch",
      label: "Batch Upload",
      icon: Upload,
      description: "Upload dan Analisis Data Batch",
      component: <BatchUpload />,
    },
    {
      id: "analysis",
      label: "Analisis",
      icon: BarChart3,
      description: "Feature Importance & Insights",
      component: <FeatureImportance />,
    },
    {
      id: "optimize",
      label: "Optimasi",
      icon: Settings,
      description: "Rekomendasi Optimasi Proses",
      component: <OptimizationPanel />,
    },
    {
      id: "impact",
      label: "Dampak Hijau",
      icon: Leaf,
      description: "Kalkulator Dampak Lingkungan",
      component: <GreenImpactCalculator />,
    },
    {
      id: "learn",
      label: "Edukasi",
      icon: BookOpen,
      description: "Materi Pembelajaran & Referensi",
      component: <EducationPanel />,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Dashboard Prediksi CO₂ ke Metanol
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Platform terintegrasi untuk analisis dan optimasi konversi CO₂ menjadi metanol
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8 bg-green-50 p-1 rounded-xl">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-medium hidden sm:block">{tab.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <Card className="border-green-200 bg-gradient-to-br from-white to-green-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100">
                        <tab.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-green-800">{tab.label}</CardTitle>
                        <CardDescription className="text-green-600">{tab.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>{tab.component}</CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

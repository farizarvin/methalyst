"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Leaf } from "lucide-react"
import { useEffect, useState } from "react"

export function QuickStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: "98.5%",
      label: "Model Accuracy",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Active Researchers",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Zap,
      value: "15,000+",
      label: "Predictions Made",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      icon: Leaf,
      value: "45%",
      label: "CO₂ Reduction",
      color: "text-green-700",
      bgColor: "bg-green-200",
    },
  ]

  if (!mounted) return null

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card
            key={index}
            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} mb-4`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

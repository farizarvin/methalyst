"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Beaker, Leaf, TrendingUp, Lightbulb, Globe } from "lucide-react"

export function EducationalPanel() {
  const [showMobileText, setShowMobileText] = useState<string | null>(null)

  const handleMobileTabClick = (tabValue: string) => {
    setShowMobileText(showMobileText === tabValue ? null : tabValue)
  }

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-10 w-10 text-green-600" />
            <h2 className="text-4xl font-bold text-primary font-[family-name:var(--font-montserrat)]">Panel Edukasi</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-green-700">
            Pelajari lebih dalam tentang konversi CO₂ menjadi metanol dan dampaknya terhadap lingkungan
          </p>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="flex w-full rounded-xl overflow-hidden mb-12 bg-white/80 backdrop-blur-sm shadow-lg p-4 py-8">
            <TabsTrigger
              value="process"
              className="flex-1 min-w-0 flex flex-col items-center justify-center py-6 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
              onClick={() => handleMobileTabClick("process")}
            >
              <div className="flex flex-col items-center justify-center">
                <Beaker className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium text-center leading-tight">
                  <span className="hidden lg:inline">Proses Kimia</span>
                  <span className="hidden md:inline lg:hidden">Proses</span>
                  <span className="md:hidden">{showMobileText === "process" ? "Proses Kimia" : ""}</span>
                </span>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="benefits"
              className="flex-1 min-w-0 flex flex-col items-center justify-center py-6 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
              onClick={() => handleMobileTabClick("benefits")}
            >
              <div className="flex flex-col items-center justify-center">
                <Leaf className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium text-center leading-tight">
                  <span className="hidden lg:inline">Manfaat Lingkungan</span>
                  <span className="hidden md:inline lg:hidden">Manfaat</span>
                  <span className="md:hidden">{showMobileText === "benefits" ? "Manfaat Lingkungan" : ""}</span>
                </span>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="applications"
              className="flex-1 min-w-0 flex flex-col items-center justify-center py-6 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
              onClick={() => handleMobileTabClick("applications")}
            >
              <div className="flex flex-col items-center justify-center">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium text-center leading-tight">
                  <span className="hidden lg:inline">Aplikasi Industri</span>
                  <span className="hidden md:inline lg:hidden">Aplikasi</span>
                  <span className="md:hidden">{showMobileText === "applications" ? "Aplikasi Industri" : ""}</span>
                </span>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="future"
              className="flex-1 min-w-0 flex flex-col items-center justify-center py-6 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
              onClick={() => handleMobileTabClick("future")}
            >
              <div className="flex flex-col items-center justify-center">
                <Globe className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium text-center leading-tight">
                  <span className="hidden lg:inline">Masa Depan</span>
                  <span className="hidden md:inline lg:hidden">Future</span>
                  <span className="md:hidden">{showMobileText === "future" ? "Masa Depan" : ""}</span>
                </span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="process">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Beaker className="h-5 w-5" />
                    Reaksi Kimia Utama
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="font-mono text-center text-green-800 font-semibold">CO₂ + 3H₂ → CH₃OH + H₂O</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Konversi CO₂ menjadi metanol melibatkan reaksi hidrogenasi katalitik pada suhu dan tekanan tinggi.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">
                      Suhu: 200-300°C
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      Tekanan: 20-50 bar
                    </Badge>
                    <Badge variant="outline">Katalis: In₂O₃</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Lightbulb className="h-5 w-5" />
                    Parameter Kunci
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Space Time Yield (STY)</h4>
                      <p className="text-sm text-gray-600">
                        Mengukur produktivitas reaktor dalam menghasilkan metanol per unit volume per waktu
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Faktor yang Mempengaruhi:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Suhu dan tekanan operasi</li>
                        <li>• Rasio H₂/CO₂ dalam umpan</li>
                        <li>• Aktivitas dan selektivitas katalis</li>
                        <li>• Waktu tinggal reaktan</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Pengurangan Emisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">-85%</div>
                    <p className="text-sm text-gray-600">Pengurangan CO₂</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    Konversi CO₂ menjadi metanol dapat mengurangi emisi gas rumah kaca hingga 85% dibandingkan produksi
                    metanol konvensional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Ekonomi Sirkular</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <Leaf className="h-12 w-12 text-green-500 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Mengubah limbah CO₂ menjadi bahan kimia bernilai tinggi, menciptakan ekonomi sirkular yang
                    berkelanjutan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Energi Terbarukan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <p className="text-sm text-gray-600">Energi Hijau</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    Proses dapat diintegrasikan dengan energi terbarukan untuk produksi metanol yang sepenuhnya
                    berkelanjutan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Aplikasi Industri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-green-100 text-green-800">Bahan Bakar</Badge>
                      <p className="text-sm text-gray-700">
                        Metanol sebagai bahan bakar alternatif untuk transportasi dan pembangkit listrik
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-blue-100 text-blue-800">Kimia</Badge>
                      <p className="text-sm text-gray-700">
                        Bahan baku untuk produksi formaldehida, asam asetat, dan plastik
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-purple-100 text-purple-800">Energi</Badge>
                      <p className="text-sm text-gray-700">Penyimpanan energi dalam bentuk cair untuk sistem grid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Potensi Pasar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Proyeksi 2030</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-bold text-2xl text-green-600">$15B</div>
                          <p className="text-gray-600">Nilai Pasar Global</p>
                        </div>
                        <div>
                          <div className="font-bold text-2xl text-blue-600">25%</div>
                          <p className="text-gray-600">Pertumbuhan Tahunan</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Teknologi konversi CO₂ menjadi metanol diproyeksikan mengalami pertumbuhan pesat seiring
                      meningkatnya kesadaran lingkungan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="future">
            <div className="space-y-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Inovasi Teknologi Masa Depan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Beaker className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-green-700 mb-2">Katalis Baru</h4>
                      <p className="text-sm text-gray-600">
                        Pengembangan katalis nano dengan efisiensi dan selektivitas yang lebih tinggi
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-700 mb-2">AI & ML</h4>
                      <p className="text-sm text-gray-600">
                        Optimasi proses menggunakan kecerdasan buatan dan machine learning
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Globe className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-purple-700 mb-2">Skala Global</h4>
                      <p className="text-sm text-gray-600">
                        Implementasi teknologi dalam skala industri global untuk mitigasi perubahan iklim
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Roadmap Teknologi 2024-2035</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-600 text-white">2024-2026</Badge>
                      <p className="text-sm">Optimasi katalis dan proses skala pilot</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-blue-600 text-white">2027-2030</Badge>
                      <p className="text-sm">Komersialisasi dan pembangunan pabrik demonstrasi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-purple-600 text-white">2031-2035</Badge>
                      <p className="text-sm">Implementasi skala industri dan integrasi global</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Lightbulb, Recycle, Beaker, Leaf, Zap, Factory, Droplets } from "lucide-react"

const faqData = [
  {
    question: "Apa itu Space Time Yield (STY) dalam konversi CO₂?",
    answer:
      "STY adalah ukuran produktivitas katalis yang menunjukkan jumlah metanol yang dihasilkan per gram katalis per jam. Satuan yang digunakan adalah mgMeOH h⁻¹ gcat⁻¹. Semakin tinggi nilai STY, semakin efisien katalis dalam mengkonversi CO₂ menjadi metanol.",
  },
  {
    question: "Mengapa konversi CO₂ menjadi metanol penting untuk lingkungan?",
    answer:
      "Konversi CO₂ menjadi metanol membantu mengurangi gas rumah kaca di atmosfer sambil menghasilkan bahan bakar yang berguna. Proses ini dapat membantu mencapai ekonomi sirkular karbon dan mengurangi ketergantungan pada bahan bakar fosil.",
  },
  {
    question: "Parameter apa yang paling mempengaruhi STY?",
    answer:
      "Berdasarkan analisis model, GHSV (Gas Hourly Space Velocity) dan SBET (surface area) adalah parameter yang paling berpengaruh, diikuti oleh suhu operasi dan rasio H₂/CO₂. Optimasi parameter-parameter ini dapat meningkatkan STY secara signifikan.",
  },
  {
    question: "Bagaimana cara menginterpretasi hasil prediksi?",
    answer:
      "Hasil prediksi STY menunjukkan performa katalis dalam kondisi tertentu. Nilai confidence menunjukkan tingkat kepercayaan model. Gunakan hasil ini sebagai panduan awal dan validasi dengan eksperimen untuk hasil yang lebih akurat.",
  },
  {
    question: "Apa saja tantangan dalam konversi CO₂ menjadi metanol?",
    answer:
      "Tantangan utama meliputi: (1) Aktivitas katalis yang masih rendah, (2) Selektivitas terhadap metanol vs produk samping, (3) Stabilitas katalis jangka panjang, (4) Efisiensi energi proses, dan (5) Skalabilitas ekonomis untuk aplikasi industri.",
  },
]

const literatureHighlights = [
  {
    title: "Cu/ZnO/Al₂O₃ Catalyst Optimization",
    result: "STY: 1.2 mgMeOH h⁻¹ gcat⁻¹",
    conditions: "T: 543K, P: 5MPa, H₂/CO₂: 3.2",
    reference: "Journal of Catalysis, 2023",
  },
  {
    title: "Novel Pd-Promoted Cu Catalyst",
    result: "STY: 0.95 mgMeOH h⁻¹ gcat⁻¹",
    conditions: "T: 523K, P: 3MPa, GHSV: 4800",
    reference: "Applied Catalysis B, 2023",
  },
  {
    title: "Hierarchical Zeolite Support",
    result: "STY: 0.87 mgMeOH h⁻¹ gcat⁻¹",
    conditions: "T: 533K, P: 4MPa, SBET: 245 m²/g",
    reference: "Chemical Engineering Journal, 2024",
  },
]

export function EducationPanel() {
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
            Education Panel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang konversi CO₂ menjadi metanol dan teknologi katalisis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Pertanyaan umum tentang konversi CO₂ dan prediksi STY</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Literature Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-secondary" />
                Literature Highlights
              </CardTitle>
              <CardDescription>Hasil terbaik dari penelitian terbaru dalam konversi CO₂</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {literatureHighlights.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {item.result}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{item.conditions}</p>
                  <p className="text-xs text-primary font-medium">{item.reference}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Process Infographic */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-accent" />
              CO₂ to Methanol Process
            </CardTitle>
            <CardDescription>Siklus konversi CO₂ menjadi metanol dan dampak lingkungannya</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 py-8">
              {/* Step 1: CO2 Capture */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Factory className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-sm mb-1">CO₂ Capture</h4>
                <p className="text-xs text-muted-foreground">Industrial emissions</p>
              </div>

              <div className="text-2xl text-muted-foreground">→</div>

              {/* Step 2: Catalytic Conversion */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Beaker className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Catalytic Conversion</h4>
                <p className="text-xs text-muted-foreground">CO₂ + 3H₂ → CH₃OH + H₂O</p>
              </div>

              <div className="text-2xl text-muted-foreground">→</div>

              {/* Step 3: Methanol Production */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Droplets className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Methanol</h4>
                <p className="text-xs text-muted-foreground">Green fuel production</p>
              </div>

              <div className="text-2xl text-muted-foreground">→</div>

              {/* Step 4: Environmental Impact */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Clean Energy</h4>
                <p className="text-xs text-muted-foreground">Carbon negative</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Sustainable Carbon Cycle
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

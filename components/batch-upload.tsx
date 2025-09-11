"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Download, CheckCircle } from "lucide-react"
import { useDropzone } from "react-dropzone"

interface BatchResult {
  id: number
  metalLoading: number
  temperature: number
  pressure: number
  predictedSTY: number
  confidence: number
}

export function BatchUpload() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<BatchResult[]>([])
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setUploadedFile(file)
      processFile(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    multiple: false,
  })

  const processFile = async (file: File) => {
    setIsProcessing(true)
    setUploadProgress(0)

    // Simulate file processing
    const mockResults: BatchResult[] = []
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setUploadProgress((i + 1) * 10)

      mockResults.push({
        id: i + 1,
        metalLoading: 5 + Math.random() * 10,
        temperature: 500 + Math.random() * 50,
        pressure: 2 + Math.random() * 6,
        predictedSTY: 0.5 + Math.random() * 0.8,
        confidence: 0.8 + Math.random() * 0.15,
      })
    }

    setResults(mockResults)
    setIsProcessing(false)
  }

  const downloadResults = () => {
    const csvContent = [
      "ID,Metal Loading,Temperature,Pressure,Predicted STY,Confidence",
      ...results.map(
        (r) =>
          `${r.id},${r.metalLoading.toFixed(2)},${r.temperature.toFixed(0)},${r.pressure.toFixed(1)},${r.predictedSTY.toFixed(3)},${r.confidence.toFixed(3)}`,
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "batch_prediction_results.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const stats =
    results.length > 0
      ? {
          avgSTY: results.reduce((sum, r) => sum + r.predictedSTY, 0) / results.length,
          minSTY: Math.min(...results.map((r) => r.predictedSTY)),
          maxSTY: Math.max(...results.map((r) => r.predictedSTY)),
        }
      : null

  return (
    <section id="batch" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-montserrat)]">
            Batch Prediction & Upload
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload file CSV dengan multiple parameter untuk prediksi batch STY
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Upload Area */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                File Upload
              </CardTitle>
              <CardDescription>Upload file CSV, XLS, atau XLSX dengan parameter katalis</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <input {...getInputProps()} />
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                {isDragActive ? (
                  <p className="text-primary">Drop file di sini...</p>
                ) : (
                  <div>
                    <p className="text-foreground mb-2">Drag & drop file atau klik untuk memilih</p>
                    <p className="text-sm text-muted-foreground">Mendukung CSV, XLS, XLSX (max 10MB)</p>
                  </div>
                )}
              </div>

              {uploadedFile && (
                <div className="mt-4 p-3 bg-muted rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{uploadedFile.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {(uploadedFile.size / 1024).toFixed(1)} KB
                    </Badge>
                  </div>
                  {!isProcessing && results.length > 0 && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
              )}

              {isProcessing && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Summary */}
          {stats && (
            <Card>
              <CardHeader>
                <CardTitle>Batch Results Summary</CardTitle>
                <CardDescription>Statistik hasil prediksi dari {results.length} sampel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{stats.avgSTY.toFixed(3)}</div>
                    <div className="text-sm text-muted-foreground">Average STY</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{stats.minSTY.toFixed(3)}</div>
                    <div className="text-sm text-muted-foreground">Minimum STY</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{stats.maxSTY.toFixed(3)}</div>
                    <div className="text-sm text-muted-foreground">Maximum STY</div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button onClick={downloadResults} className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results Table */}
          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Prediction Results</CardTitle>
                <CardDescription>Detail hasil prediksi untuk setiap sampel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-2 font-semibold">ID</th>
                        <th className="text-left p-2 font-semibold">Metal Loading</th>
                        <th className="text-left p-2 font-semibold">Temperature</th>
                        <th className="text-left p-2 font-semibold">Pressure</th>
                        <th className="text-left p-2 font-semibold">Predicted STY</th>
                        <th className="text-left p-2 font-semibold">Confidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.slice(0, 5).map((result) => (
                        <tr key={result.id} className="border-b hover:bg-muted/25">
                          <td className="p-2">{result.id}</td>
                          <td className="p-2">{result.metalLoading.toFixed(2)} wt%</td>
                          <td className="p-2">{result.temperature.toFixed(0)} K</td>
                          <td className="p-2">{result.pressure.toFixed(1)} MPa</td>
                          <td className="p-2 font-semibold text-primary">{result.predictedSTY.toFixed(3)}</td>
                          <td className="p-2">
                            <Badge variant="outline">{(result.confidence * 100).toFixed(1)}%</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {results.length > 5 && (
                    <div className="text-center p-4 text-sm text-muted-foreground">
                      ... and {results.length - 5} more results
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

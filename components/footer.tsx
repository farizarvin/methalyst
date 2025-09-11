import { Leaf, Beaker, Github, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Leaf className="h-8 w-8 text-primary" />
                <Beaker className="h-6 w-6 text-secondary" />
              </div>
              <span className="text-xl font-bold text-primary font-[family-name:var(--font-montserrat)]">
                CO₂-to-Methanol Predictor
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Platform prediksi inovatif untuk konversi CO₂ menjadi metanol menggunakan machine learning. Membantu
              peneliti dan engineer mengoptimalkan proses katalisis untuk masa depan yang lebih hijau.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#simulator" className="text-muted-foreground hover:text-primary transition-colors">
                  Simulator
                </a>
              </li>
              <li>
                <a href="#batch" className="text-muted-foreground hover:text-primary transition-colors">
                  Batch Upload
                </a>
              </li>
              <li>
                <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Green Impact
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  About
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Reference
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Acknowledge
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Contact
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CO₂-to-Methanol Predictor. Built with ❤️ for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  )
}

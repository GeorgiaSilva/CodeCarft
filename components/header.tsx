"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CC</span>
            </div>
            <h1 className="text-xl font-bold">CodeCraft</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

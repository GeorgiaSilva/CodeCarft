"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir como podemos
            ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 ">
          {/* Contact Information */}
          <div className="space-y-8 flex flex-col justify-center text-center ">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vamos Conversar</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos sempre prontos para novos desafios. Entre em contato conosco através dos canais abaixo ou
                preencha o formulário ao lado.
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">contato@equipeti.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
{/* 
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda - Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo e entraremos em contato em até 24 horas.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}

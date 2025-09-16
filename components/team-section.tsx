"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    id: "joao",
    name: "João Alves",
    role: "Backend Developer",
    bio: "Desenvolvedor focado em aplicações web, com base em conceitos de engenharia e computação aplicada.",
    image: "/joaoalves.jpeg",
    skills: ["python", "django", "php", "postgresql"],
    social: {
      github: "https://github.com/BR-Jv",
      linkedin: "www.linkedin.com/in/joão-victor-630266218",
      email: "jv.alves193@gmail.com",
    },
  },
  {
    id: "georgia",
    name: "Geórgia Silva",
    role: "Frontend Developer | UI/UX Designer",
    bio: "Designer experiente focada em criar experiências digitais intuitivas e acessíveis. Combina criatividade com análise de dados para otimizar interfaces.",
    image: "/georgia.jpeg",
    skills: ["Figma", "Prototyping", "React", "Next.js", "React Native"],
    social: {
      github: "https://github.com/GeorgiaSilva",
      linkedin: "https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/",
      email: "georgia@gmail.com",
    },
  },
  {
    id: "rafael",
    name: "Rafael Santos",
    role: "Mobile developer",
    bio: "Desenvolvedor Android experiente, especializada em criar aplicativos móveis intuitivos, performáticos e otimizados.",
    image: "/rafael.jpeg",
    skills: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "MVVM"],
    social: {
      github: "https://github.com/rafaelsoares07",
      linkedin: "https://www.linkedin.com/in/rafael-soares-gabriel/",
      email: "rafael.sgabriel9@gmail.com",
    },
  },
  {
    id: "edmar",
    name: "Edmar Filho",
    role: "Backend Developer",
    bio: "Desenvolvedor especializado em implementar funções, serviços e API para serem usadas por aplicações web e/ou mobile. Experiência com Bancos de Dados relacionais e RabbitMQ para orquestrar filas.",
    image: "/edinho.jpeg",
    skills: ["Golang", "PHP", "DevOps", "Bancos de Dados", "RabbitMQ"],
    social: {
      github: "https://github.com/edmfilho",
      linkedin: "#",
      email: "edmar.filho.084@gmail.com",
    },
  },
  {
    id: "joao2",
    name: "João Souza",
    role: "Backend Developer",
    bio: "Desenvolvedor com experiência em Golang, Node.js, PHP, React, PostgreSQL, Git, AWS e metodologias ágeis. Reconhecido pela proatividade, ética, comunicação clara e capacidade de resolver problemas com criatividade e responsabilidade.",
    image: "/jv2.jpeg",
    skills: ["Golang", "PHP", "DevOps", "Postgres", "AWS",],
    social: {
      github: "https://github.com/jvsouz4",
      linkedin: "https://www.linkedin.com/in/jvsouz4/",
      email: "joaovsouz@gmail.com",
    },
  },
  {
    id: "thiago",
    name: "Thiago Lopes",
    role: "Desenvolvedor Fullstack | IA",
    bio: "Sou desenvolvedor fullstack especializado em Go, Machine Learning, LLMs e Inteligência Artificial. Atuei em projetos para empresas como Petrobras, Geowellex, Tembice e Simples Meios de Pagamento. Apaixonado por inovação, transformo tecnologia em soluções práticas e escaláveis.",
    image: "/thiago.jpeg",
    skills: ["Go", "ML", "LLM", "IA"],
    social: {
      github: "https://github.com/thiagonasmto/",
      linkedin: "https://www.linkedin.com/in/thiago-lopes-eng-comp/",
      email: "thiagonasmento25@gmail.com",
    },
  },
]

export function TeamSection() {
  const [activeTab, setActiveTab] = useState("joao")
  const activeMember = teamMembers.find((member) => member.id === activeTab)

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça os profissionais talentosos que fazem parte da equipe TI. Cada membro traz expertise única para
            entregar soluções excepcionais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveTab(member.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === member.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>

          {/* Active Member Content */}
          {activeMember && (
            <Card className="overflow-hidden ">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <img
                      src={activeMember.image || "/placeholder.svg"}
                      alt={activeMember.name}
                      className=" w-120 h-auto rounded-lg object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{activeMember.name}</h3>
                      <p className="text-accent font-semibold text-lg">{activeMember.role}</p>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{activeMember.bio}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeMember.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a
                        href={activeMember.social.github}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="GitHub"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={activeMember.social.linkedin}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${activeMember.social.email}`}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

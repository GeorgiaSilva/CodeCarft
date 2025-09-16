import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "App de Guia Gastronômico",
    description:
      "O Ki Fome é um aplicativo móvel que funciona como um guia gastronômico, ajudando usuários a descobrir novos pratos e restaurantes próximos.",
    image: "/ki-fome.png",
    technologies: ["React Native", "Node.js", "Expo"],
    liveUrl: "https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&t=HAdJwivLzd8nkjJS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    githubUrl: "#",
  },
  {
    title: "App Correspondente Banco do Brasil",
    description: "O aplicativo foi desenvolvido para terminais de pagamento, oferecendo uma solução completa, estável e otimizada para operações comerciais no ponto de venda.",
    image: "/app.png",
    technologies: ["Android", "Java"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portal Municipal",
    description: "Portal direcionado a servidores da secretaria de administração do município, ele foi pensado para tornar o acesso aos informativos e ferramentas de forma simples para os servidores. Com layout simples, seu front-end foi desenvolvido com HTML, CSS e JS.",
    image: "/portal-municipal.jpeg",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sistema gestão",
    description: "Esse sistema abrange diversos dados e relatórios, tais como: dashboards completos, relatórios transacionais e comissionais, relatórios de equipamentos, área logística e atendimento ao cliente. Tudo isso em um único sistema, facilitando a gestão e o controle das operações.",
    image: "/sistema-gestao.jpeg",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },

]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, sempre focando em qualidade, performance
            e experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2"  />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

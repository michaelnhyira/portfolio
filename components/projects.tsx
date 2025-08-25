"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { ImageCarousel } from "./ImageCarousel"

const projects = [
  {
    title: "POS Management System",
    description: "A full-featured point-of-sale system with inventory tracking, sales processing, customer management, reporting, and multi-user roles.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Stripe"],
    image: "/images/project1.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "/images/project2.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in modern web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative">
                {project.title === "POS Management System" ? (
                  <ImageCarousel
                    images={["/assets/pos/pos1.png", "/assets/pos/pos2.png", "/assets/pos/pos3.png"]}
                    alt="POS app screenshots"
                  />
                ) : (
                  <ImageCarousel
                    images={["/assets/task/task1.png", "/assets/task/task2.png", "/assets/task/task3.png"]}
                    alt="Task app screenshots"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden" />
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 px-8 py-3 text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 
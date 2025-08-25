"use client"

import { motion } from "framer-motion"
import { School, Church, Briefcase, Building2, Code2 } from "lucide-react"

const services = [
  {
    title: "School Management System",
    description: "Comprehensive student, staff, attendance, grading, and fee management with reporting.",
    icon: School,
  },
  {
    title: "Church Management System",
    description: "Membership, donations, events, communications, and ministry workflows streamlined.",
    icon: Church,
  },
  {
    title: "Portfolio Websites",
    description: "Fast, responsive personal sites optimized for SEO and lead generation.",
    icon: Briefcase,
  },
  {
    title: "Hostel Management System",
    description: "Room allocation, billing, maintenance requests, and occupancy analytics.",
    icon: Building2,
  },
  {
    title: "Custom Web Solutions",
    description: "Tailored apps for unique business needs with modern, scalable stacks.",
    icon: Code2,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Solutions I build for schools, churches, businesses, and individuals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <service.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
              </div>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



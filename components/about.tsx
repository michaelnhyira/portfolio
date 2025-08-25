"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Web Developer & Creative Problem Solver
            </h3>
            
            <p className="text-foreground/80 leading-relaxed">
              Highly skilled and motivated HTML, CSS, and JavaScript programmer with a strong passion for web development. 
              I have a proven track record of designing and implementing innovative and user-friendly web applications.
            </p>

            {/* Experience Highlights */}
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Experience Highlights</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Collaborated with development teams to create responsive websites</li>
                <li>• Implemented front-end functionality using modern web technologies</li>
                <li>• Optimized website performance through code optimization and caching</li>
                <li>• Strong problem-solving and debugging skills</li>
              </ul>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
} 
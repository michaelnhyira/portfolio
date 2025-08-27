"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, MessageCircle, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:bg-gray-900 hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/michael-nhyira-a38287274/",
    color: "hover:bg-blue-600 hover:text-white"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/haven_highest/",
    color: "hover:bg-pink-600 hover:text-white"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/233547441320?text=Hello%2C%20I've%20seen%20your%20website%20and%20would%20like%20to%20get%20in%20touch%20with%20your%20for%20business",
    color: "hover:bg-green-500 hover:text-white"
  }
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MH</span>
              </div>
              <span className="text-xl font-bold gradient-text">Michael Haven</span>
            </div>
            <p className="text-foreground/70 max-w-xs">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-foreground/70 hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-full bg-foreground/10 text-foreground transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-foreground/60">
            © 2024 Michael Haven. All rights reserved. Made with{" "}
            <Heart className="inline-block w-4 h-4 text-red-500 mx-1" />
            and modern web technologies.
          </p>
          <p className="text-sm text-foreground/50 mt-2">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 
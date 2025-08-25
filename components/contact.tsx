"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"
import { useForm, ValidationError } from "@formspree/react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "michaelnhyira77@gmail.com",
    link: "mailto:michaelnhyira77@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 54 744 1320",
    link: "tel:+233547441320",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kumasi, Ghana",
    link: "#",
    color: "from-purple-500 to-pink-500"
  }
]

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

export function Contact() {
  const [state, handleSubmit] = useForm("mrblnken")

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Feel free to reach out if you have any questions about my work, want to collaborate on a project, 
                or just want to say hello. I'm always excited to hear from fellow developers and potential clients.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-full bg-foreground/10 text-foreground transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            {state.succeeded ? (
              <p className="text-green-600">Thanks for your message!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
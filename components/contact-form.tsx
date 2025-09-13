"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  message: string
}

const projectTypes = [
  "Workflow Automation",
  "AI Voice Support",
  "Social Media Automation",
  "AI Strategy Consulting",
  "Email Outreach",
  "Lead Generation",
  "Custom Solution",
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProjectTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to Automate Your Business?
        </motion.h2>
        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get a free consultation and discover how AI automation can transform your workflows in just 30 days.
        </motion.p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-1"
        >
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl h-full">
            <CardHeader>
              <CardTitle className="text-xl text-white mb-4">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-lime-300/10 border border-brand-lime-300/20">
                  <Mail className="h-5 w-5 text-brand-lime-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-white/70">hello@mureai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-lime-300/10 border border-brand-lime-300/20">
                  <Phone className="h-5 w-5 text-brand-lime-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-lime-300/10 border border-brand-lime-300/20">
                  <MapPin className="h-5 w-5 text-brand-lime-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-sm text-white/70">San Francisco, CA</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-medium text-white mb-3">Why Choose MureAI?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-brand-lime-300" />
                    <span className="text-xs text-white/70">24-hour response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-brand-lime-300" />
                    <span className="text-xs text-white/70">Free consultation & audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-brand-lime-300" />
                    <span className="text-xs text-white/70">Dedicated success manager</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-2"
        >
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Start Your AI Journey</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-brand-lime-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/70">
                    We'll get back to you within 24 hours with a custom automation strategy.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-brand-lime-300/50 focus:ring-brand-lime-300/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-brand-lime-300/50 focus:ring-brand-lime-300/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-brand-lime-300/50 focus:ring-brand-lime-300/20"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-brand-lime-300/50 focus:ring-brand-lime-300/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-white">Project Type</Label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={formData.projectType === type ? "default" : "secondary"}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.projectType === type
                              ? "bg-lime-300 text-black hover:bg-lime-400"
                              : "bg-black/20 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                          onClick={() => handleProjectTypeSelect(type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-white">
                      Tell us about your project *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-lime-300/50 focus:ring-lime-300/20 resize-none"
                      placeholder="Describe your current workflow challenges and what you'd like to automate..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime-400 text-black hover:bg-lime-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Get Free Consultation
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-white/50 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

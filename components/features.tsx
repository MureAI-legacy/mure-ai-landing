"use client"

import React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, Zap, Users, BarChart3, Shield, Clock, Bot, ArrowRight, ArrowDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes us the best AI automation partner for you.",
  subtitle: "Discover our unique approach to intelligent automation",
}

const workflowSteps = [
  {
    title: "Free Consultation",
    description: "We'll discuss your business to find where AI automation can save you time and simplify your work.",
    code: "$ mure analyze --find-opportunities",
    icon: "💬",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Custom Workflow",
    description:
      "We build the tools that integrate seamlessly into your existing routine without any complicated learning curve.",
    code: "$ mure build --custom-fit",
    icon: "⚙️",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Deploy & Support",
    description: "You choose: we deploy and monitor for you, or you deploy and we're here to help whenever needed.",
    code: "$ mure deploy --easy-launch",
    icon: "🚀",
    color: "from-lime-500/20 to-green-500/20",
  },
]

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automations that plug right into your current tools.",
    features: [
      "AI process discovery & optimization",
      "100+ app integrations (e.g., Salesforce, Google)",
      "Smart rules & scheduling workflows",
    ],
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: Bot,
    title: "AI Voice Support",
    description: "AI agents that sound human, work 24/7, and handle calls with nuance and accuracy.",
    features: [
      "Natural voice in multiple languages",
      "24/7 inbound & outbound calls",
      "Live escalation to human agents",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "Social Media Automation",
    description: "Manage high-volume comments, posts, and crises with AI that knows your brand voice.",
    features: ["Real-time comment replies", "Brand sentiment monitoring", "Auto content scheduling"],
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: BarChart3,
    title: "AI Strategy Consulting",
    description: "Expert guidance to help you adopt AI with confidence and long-term value.",
    features: [
      "System audit & transformation roadmap",
      "ROI modeling & rollout planning",
      "GDPR-compliant AI implementation",
    ],
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Clock,
    title: "Automated Email Outreach",
    description: "Personalized email flows that convert leads—without you lifting a finger.",
    features: ["Smart sequences based on behavior", "Dynamic content & A/B testing", "CRM integration & lead tracking"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Shield,
    title: "AI Lead Generation",
    description: "AI that finds and qualifies leads while your team focuses on closing deals.",
    features: ["Auto prospecting & data enrichment", "Behavior-based lead scoring", "CRM sync & assignment routing"],
    gradient: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-400",
  },
]

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("mureai-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="mb-20">
        <h3 className="mb-12 text-center text-2xl font-bold text-white">Three-Step Workflow</h3>

        {/* Desktop Flow Layout */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-center gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  <Card
                    className={`w-80 liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] transition-all duration-300 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-100 transition-opacity duration-300`}
                    />

                    <CardHeader className="relative z-10 text-center pb-4">
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-300 text-black font-bold text-2xl shadow-lg">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="absolute -top-1 -right-1 text-2xl">{step.icon}</div>
                        </div>
                        <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 text-center">
                      <p className="text-sm text-white/70 mb-4 leading-relaxed">{step.description}</p>
                      <div className="bg-black/30 rounded-lg p-3 border border-lime-300/20">
                        <code className="text-xs text-lime-300 font-mono">{step.code}</code>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index + 1) * 0.2 + 0.3, duration: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-4"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="h-8 w-8 text-lime-300/60 animate-pulse" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card
                    className={`w-full max-w-md liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-100 transition-opacity duration-300`}
                    />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-black font-bold text-lg shadow-lg">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="absolute -top-1 -right-1 text-lg">{step.icon}</div>
                        </div>
                        <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-sm text-white/70 mb-3">{step.description}</p>
                      <code className="text-xs text-lime-300 bg-black/20 px-2 py-1 rounded border border-lime-300/20">
                        {step.code}
                      </code>
                    </CardContent>
                  </Card>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index + 1) * 0.2 + 0.3, duration: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="my-2"
                  >
                    <ArrowDown className="h-6 w-6 text-lime-300/60 animate-bounce" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="mb-12 text-center text-2xl font-bold text-white">Our Services</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] transition-all duration-300 relative overflow-hidden h-full group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-black/20 border border-white/10 group-hover:border-lime-300/30 transition-colors duration-300">
                      {React.createElement(service.icon, { className: `h-6 w-6 ${service.iconColor}` })}
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-lime-100 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-sm text-white/70 mb-4 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="text-xs text-white/60 space-y-2 group-hover:text-white/70 transition-colors duration-300">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-lime-300 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 25 },
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <p className="text-[11px] tracking-widest text-neutral-400">AUTOMATION POWER</p>
              <CardTitle className="mt-1 text-xl text-white">Get ahead, stay ahead with AI advantage</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 hover:border-lime-300/30 transition-colors duration-300">
                  <Image
                    src="/images/intuitive-1.png"
                    alt="AI automation dashboard interface"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 768px) 240px, 45vw"
                    priority={false}
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 hover:border-lime-300/30 transition-colors duration-300">
                  <Image
                    src="/images/intuitive-2.png"
                    alt="Real-time analytics and insights"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 768px) 240px, 45vw"
                    priority={false}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 25 },
          }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <p className="text-[11px] tracking-widest text-neutral-400">CLIENT SUCCESS</p>
              <CardTitle className="mt-1 text-xl text-white">
                MureAI didn't just automate our processes, they transformed our entire business efficiency — we're
                saving 40+ hours per week.
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="mb-6 flex items-end gap-4">
                <div className="text-5xl font-bold text-lime-300">4.9</div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={"/images/top-rated-1.png"}
                  width={280}
                  height={160}
                  alt="AI workflow automation in action"
                  className="h-full w-full rounded-xl border border-white/10 object-cover hover:scale-105 hover:border-lime-300/30 transition-all duration-300"
                />
                <Image
                  src={"/images/top-rated-2.png"}
                  width={280}
                  height={160}
                  alt="Real-time business intelligence dashboard"
                  className="h-full w-full rounded-xl border border-white/10 object-cover hover:scale-105 hover:border-lime-300/30 transition-all duration-300"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

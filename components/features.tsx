"use client"

import React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, Zap, Users, BarChart3, Shield, Clock, Bot } from "lucide-react"
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

const ServicePhoneCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] transition-shadow duration-300">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.1)_0%,transparent_50%)] animate-pulse" />
        </div>

        <div className="relative z-10 p-4 h-full flex flex-col">
          {/* Top indicator bar */}
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/20" />

          {/* Icon and title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-black/40 border border-white/20">
              {React.createElement(service.icon, { className: `h-5 w-5 ${service.iconColor}` })}
            </div>
            <div className="text-lg font-bold text-white/90 leading-tight">{service.title}</div>
          </div>

          {/* Description */}
          <p className="text-xs text-white/70 mb-4 leading-relaxed flex-1">{service.description}</p>

          {/* Features */}
          <div className="space-y-2">
            {service.features.slice(0, 2).map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-lime-300 mt-1.5 flex-shrink-0"></div>
                <span className="text-[10px] text-white/60 leading-tight">{feature}</span>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="mt-4 inline-flex items-center rounded-full bg-black/40 px-2 py-1 text-[9px] uppercase tracking-wider text-brand-lime-300 self-start">
            mureai service
          </div>
        </div>
      </div>
    </div>
  )
}

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

      <div className="mb-28">
        <h3 className="mb-12 text-center text-2xl font-bold text-white"></h3>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServicePhoneCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 max-w-2xl mx-auto">
          {services.slice(4, 6).map((service, index) => (
            <motion.div
              key={index + 4}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 4) * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServicePhoneCard service={service} />
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
          <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <p className="text-[11px] tracking-widest text-neutral-400">AUTOMATION POWER</p>
              <CardTitle className="mt-1 text-xl text-white">Get ahead, stay ahead with AI advantage</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
                  <Image
                    src="/images/intuitive-1.png"
                    alt="AI automation dashboard interface"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 768px) 240px, 45vw"
                    priority={false}
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10">
              <p className="text-[11px] tracking-widest text-neutral-400">CLIENT SUCCESS</p>
              <CardTitle className="mt-1 text-xl text-white">
                MureAI didn't just automate our processes, they transformed our entire business efficiency — we're
                saving 40+ hours per week.
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="mb-6 flex items-end gap-4">
                <div className="text-5xl font-bold text-brand-lime-300">4.9</div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-lime-300 text-brand-lime-300" />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={"/images/top-rated-1.png"}
                  width={280}
                  height={160}
                  alt="AI workflow automation in action"
                  className="h-full w-full rounded-xl border border-white/10 object-cover hover:scale-105 hover:border-brand-lime-300/30 transition-all duration-300"
                />
                <Image
                  src={"/images/top-rated-2.png"}
                  width={280}
                  height={160}
                  alt="Real-time business intelligence dashboard"
                  className="h-full w-full rounded-xl border border-white/10 object-cover hover:scale-105 hover:border-brand-lime-300/30 transition-all duration-300"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { 
  StarIcon, 
  BoltIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CpuChipIcon,
  CogIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import PhoneVideo from "./phone-video"

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
    icon: CogIcon,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automations that plug right into your current tools.",
    features: [
      "AI process discovery & optimization",
      "100+ app integrations (e.g., Salesforce, Google)",
      "Smart rules & scheduling workflows",
    ],
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-lime-300",
    video: "https://ymdph2vmzawfnfad.public.blob.vercel-storage.com/abstract.mp4",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "AI Voice Support",
    description: "AI agents that sound human, work 24/7, and handle calls with nuance and accuracy.",
    features: [
      "Natural voice in multiple languages",
      "24/7 inbound & outbound calls",
      "Live escalation to human agents",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-lime-300",
    video: "https://ymdph2vmzawfnfad.public.blob.vercel-storage.com/ai1.mp4",
  },
  {
    icon: UserGroupIcon,
    title: "Social Media Automation",
    description: "Manage high-volume comments, posts, and crises with AI that knows your brand voice.",
    features: ["Real-time comment replies", "Brand sentiment monitoring", "Auto content scheduling"],
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-lime-300",
    video: "https://ymdph2vmzawfnfad.public.blob.vercel-storage.com/ai2.mp4",
    // No video for this one - will show static content
  },
  {
    icon: ChartBarIcon,
    title: "AI Strategy Consulting",
    description: "Expert guidance to help you adopt AI with confidence and long-term value.",
    features: [
      "System audit & transformation roadmap",
      "ROI modeling & rollout planning",
      "GDPR-compliant AI implementation",
    ],
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconColor: "text-lime-300",
    video: "https://ymdph2vmzawfnfad.public.blob.vercel-storage.com/ai3.mp4",
    // No video for this one - will show static content
  },
  {
    icon: ClockIcon,
    title: "Automated Email Outreach",
    description: "Personalized email flows that convert leads—without you lifting a finger.",
    features: ["Smart sequences based on behavior", "Dynamic content & A/B testing", "CRM integration & lead tracking"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
    // No video for this one - will show static content
  },
  {
    icon: ShieldCheckIcon,
    title: "AI Lead Generation",
    description: "AI that finds and qualifies leads while your team focuses on closing deals.",
    features: ["Auto prospecting & data enrichment", "Behavior-based lead scoring", "CRM sync & assignment routing"],
    gradient: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-400",
    // No video for this one - will show static content
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

        {/* Video or Static Content */}
        {service.video ? (
          <div className="absolute inset-0 z-0">
            <PhoneVideo
              src={service.video}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : null}

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
      <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Explore Our Services
      </h2>

      <div className="">
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

        
      </div>

    </section>
  )
}

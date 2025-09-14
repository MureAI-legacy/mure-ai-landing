"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Ahmed Shaban",
    role: "CEO, Business Strategist",
    bio: "Co-founder of 2 startups with years of business experience.",
    image: "/ahmed.webp",
    skills: ["Machine Learning", "Business Strategy"],
    social: {
      linkedin: "#",
     
    },
  },
  {
    name: "Duc Lee",
    role: "CTO, Full-stack Developer",
    bio: "Full-stack developer specializing in gen AI software and SaaS products.",
    image: "/duc.webp",
    skills: ["Fullstack Engineer", "AI Development", "Langflow", "Workflow Design"],
    social: {
      linkedin: "#",
      
      github: "#",
    },
  },
  {
    name: "Yunwei Cui",
    role: "Marketing & Sales",
    bio: "Sales and branding strategist with an emphasis on delivering valuable products.",
    image: "/yun.webp",
    skills: ["Branding", "UI/UX", "Marketing & Sales"],
    social: {
      linkedin: "#",
     
      github: "#",
    },
  },
  {
    name: "Udayanto Atmojo",
    role: "Project Manager",
    bio: "PhD in automation and applied AI. Project manager and market research expert.",
    image: "/atmojo.webp",
    skills: ["Project Management", "Market Research", "AI Implementation"],
    social: {
      linkedin: "#",
      
    },
  },
  {
    name: "Andre Santacruz",
    role: "Automation Expert",
    bio: "AI workflow engineer with a background in finance.",
    image: "/andre.webp",
    skills: ["AI Workflows", "Automation Engineer", "Finance"],
    social: {
      linkedin: "#",
    
    },
  },
]

export function Teams() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 ">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Our team combines deep AI expertise with practical business experience to deliver automation solutions that
          actually work.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lime/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-6 relative z-10 h-full">
                <div className="relative mb-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 hover:border-brand-lime/30 transition-colors duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 300px, 280px"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-lime-300 rounded-full border-2 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-brand-lime-300 font-medium">{member.role}</p>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-[10px] bg-black/20 text-brand-lime-300 border border-brand-lime-300/20 hover:bg-brand-lime-300/10 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6 absolute bottom-0 left-6 z-20">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        className="text-white/40 hover:!text-white transition-colors duration-200"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-white/40 hover:!text-white transition-colors duration-200"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-white/40 hover:!text-white transition-colors duration-200"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
         {/*<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-brand-lime-300/20">
         <div className="w-2 h-2 bg-brand-lime-300 rounded-full animate-pulse"></div>
          <p className="text-sm text-white/70">
            <span className="text-brand-lime-300 font-medium">15+ years</span> combined AI & automation experience
          </p> 
        </div>*/}
      </motion.div>
    </section>
  )
}

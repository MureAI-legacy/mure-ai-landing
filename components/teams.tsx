"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "AI Strategy Director",
    bio: "Former Google AI researcher with 8+ years building enterprise automation solutions.",
    image: "/professional-headshot-of-ai-director.jpg",
    skills: ["Machine Learning", "Enterprise AI", "Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Rodriguez",
    role: "Automation Engineer",
    bio: "Full-stack developer specializing in workflow automation and system integrations.",
    image: "/female-engineer-headshot.png",
    skills: ["Python", "API Integration", "Workflow Design"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Thompson",
    role: "AI Voice Specialist",
    bio: "Voice technology expert with background in natural language processing and conversational AI.",
    image: "/professional-headshot-of-ai-voice-specialist.jpg",
    skills: ["NLP", "Voice AI", "Conversational Design"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Elena Vasquez",
    role: "Client Success Manager",
    bio: "Business strategist focused on AI adoption and digital transformation for enterprise clients.",
    image: "/business-strategist-headshot.png",
    skills: ["Business Strategy", "Client Relations", "AI Implementation"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function Teams() {
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
          Meet Our AI Experts
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-6 relative z-10">
                <div className="relative mb-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 hover:border-lime-300/30 transition-colors duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 300px, 280px"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-lime-300 rounded-full border-2 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-lime-300 font-medium">{member.role}</p>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-[10px] bg-black/20 text-lime-300 border border-lime-300/20 hover:bg-lime-300/10 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-white/40 hover:text-lime-300 transition-colors duration-200"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-white/40 hover:text-lime-300 transition-colors duration-200"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-white/40 hover:text-lime-300 transition-colors duration-200"
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-lime-300/20">
          <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
          <p className="text-sm text-white/70">
            <span className="text-lime-300 font-medium">15+ years</span> combined AI & automation experience
          </p>
        </div>
      </motion.div>
    </section>
  )
}

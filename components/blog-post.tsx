"use client"

import React from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function BlogPost() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
      {/* Left Card - Automation Power */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="h-full"
      >
        <Card className="h-full liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative z-10 pb-4">
            <p className="text-[11px] tracking-widest text-neutral-400 mb-2">AUTOMATION POWER</p>
            <CardTitle className="text-xl lg:text-2xl text-white leading-tight">
              Get ahead, stay ahead with AI advantage
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
                <Image
                  src="/images/human.png"
                  alt="AI automation dashboard interface"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 200px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
                <Image
                  src="/images/chip.png"
                  alt="Real-time analytics and insights"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 200px, 45vw"
                  priority={false}
                />
              </div>
            </div>

            
          </CardContent>

          
        </Card>
      </motion.div>

      {/* Right Card - Client Success */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="h-full"
      >
        <Card className="h-full liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lime-300/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative z-10 pb-4">
            <p className="text-[11px] tracking-widest text-neutral-400 mb-2">CLIENT SUCCESS</p>
            <CardTitle className="text-xl lg:text-2xl text-white leading-tight">
              MureAI didn't just automate the processes, they made us stronger.
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0">
            {/* Rating Section */}
            <div className="mb-6 flex items-center gap-4">
              <div className="text-4xl lg:text-5xl font-bold text-brand-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-brand-lime-300 text-brand-lime-300" />
                ))}
              </div>
            </div>
            
            {/* Images Section */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
                <Image
                  src="/images/box.png"
                  alt="AI workflow automation in action"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 200px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 hover:border-brand-lime-300/30 transition-colors duration-300">
                <Image
                  src="/images/earbods.png"
                  alt="Real-time business intelligence dashboard"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 200px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </section>
  )
}

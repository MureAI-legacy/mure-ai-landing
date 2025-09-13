"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Target, Rocket, Shield, Globe } from "lucide-react"

const cardData = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description:
      "Leverage cutting-edge artificial intelligence to automate complex workflows and decision-making processes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Experience unprecedented speed with our optimized algorithms that process data in real-time.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Achieve pinpoint accuracy in your campaigns with our advanced targeting and analytics systems.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Grow your business with solutions that scale seamlessly from startup to enterprise level.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Protect your data with bank-level security measures and compliance standards.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your presence worldwide with our internationally optimized platform and support.",
    color: "from-teal-500 to-green-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
}

const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

export function AnimatedCards() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover the cutting-edge capabilities that make our platform the choice for modern businesses
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cardData.map((card, index) => {
          const IconComponent = card.icon
          return (
            <motion.div key={index} variants={cardVariants} whileHover="hover" className="group">
              <motion.div variants={hoverVariants} className="h-full">
                <Card className="h-full bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-2xl hover:shadow-white/10">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

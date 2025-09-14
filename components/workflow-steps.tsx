"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowDown } from "lucide-react"

const workflowSteps = [
  {
    title: "Free Consultation",
    description: "Book a session with us to find where AI automation can save you time and simplify your work.",
    code: "$ mure analyze --find",
    icon: "💬",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Custom Workflow",
    description:
      "We build the tools that integrate seamlessly into your existing routine without any complicated learning curve.",
    code: "$ mure build --custom",
    icon: "⚙️",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Deploy & Support",
    description: "You choose: we deploy and monitor for you, or you deploy and we're here to help whenever needed.",
    code: "$ mure deploy --easy",
    icon: "🚀",
    color: "from-lime-500/20 to-green-500/20",
  },
]

export function WorkflowSteps() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 ">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Simple steps to get started
      </h2>

      <div className="mb-20">
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
                    className={`w-80 liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime-300/20 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] transition-all duration-300 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-100 transition-opacity duration-300`}
                    />

                    <CardHeader className="relative z-10 text-center pb-4">
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime-300 text-black font-bold text-2xl shadow-lg">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="absolute -top-1 -right-1 text-2xl">{step.icon}</div>
                        </div>
                        <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 text-center">
                      <p className="text-sm text-white/70 mb-4 leading-relaxed">{step.description}</p>
                      <div className="bg-black/30 rounded-lg p-3 border border-brand-lime-300/20">
                        <code className="text-xs text-brand-lime-300 font-mono">{step.code}</code>
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
                      <ArrowRight className="h-8 w-8 text-brand-lime-300/60 animate-pulse" />
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
                    className={`w-full max-w-md liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-brand-lime-300/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)] transition-all duration-300 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-100 transition-opacity duration-300`}
                    />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-lime-300 text-black font-bold text-lg shadow-lg">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="absolute -top-1 -right-1 text-lg">{step.icon}</div>
                        </div>
                        <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-sm text-white/70 mb-3">{step.description}</p>
                      <code className="text-xs text-brand-lime-300 bg-black/20 px-2 py-1 rounded border border-brand-lime-300/20">
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
                    <ArrowDown className="h-6 w-6 text-brand-lime-300/60 animate-bounce" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

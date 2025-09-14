"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"
import Image from "next/image"

export function AppDescription() {
  

  const buttonTry = (
    <Button
      asChild
      className="group relative overflow-hidden rounded-full bg-brand-lime px-6 text-black font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-lime-300/25 active:scale-95"
    >
      <a href="#404" target="_blank" rel="noopener noreferrer" className="relative z-10">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-lime-300">
          Try Now
        </span>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lime-300 via-brand-lime-400 to-brand-lime-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent  via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full z-10"></div>
      </a>
    </Button>
  )

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
        <div className="relative grid items-center gap-12 lg:gap-16 lg:grid-cols-2 text-center lg:text-left">
          {/* Left copy */}
          <div className="flex flex-col justify-between">
            <div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">ALL-IN-ONE</span>
              <span className="block text-brand-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">AUTOMATION</span>
              <span className="block text-white">PLATFORM</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              Our intelligent platform builds workflows for you with no manual setup required. 
              Scale faster with AI-driven reliability and enterprise-grade flexibility.
            </p>
            <div className="mt-6"></div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="mb-2 text-[11px] tracking-widest text-brand-lime-300">AUTOMATE INSTANTLY</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Build your custom workflows on the spot
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
              Describe your process, and let AI generate ready-to-run workflows.
              Skip the drag-and-drop hassle
              </p>
            </div>
            <div className="mt-6 ">{buttonTry}</div>
          </div>

          {/* Right mockup */}
          <div className=" mx-auto w-full max-w-[320px] relative">
            <a 
              href="https://wa.link/rc25na" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block transition-all duration-500 ease-out hover:scale-102 hover:-translate-y-1 relative z-10"
            >
              {/* Background glow layers */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-brand-lime-300/10 via-brand-lime-400/15 to-brand-lime-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 scale-110 pointer-events-none"></div>
              <div className="absolute -inset-6 rounded-[50px] bg-gradient-to-br from-brand-lime-200/5 via-transparent to-brand-lime-600/5 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-1000 scale-125 pointer-events-none"></div>
              
              <div className="relative rounded-[28px] glass-border liquid-glass p-2 shadow-2xl group-hover:shadow-[0_25px_50px_-12px_rgba(132,204,22,0.25)] transition-all duration-500">
                {/* Inner glow effect on hover */}
                <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-brand-lime-300/20 to-brand-lime-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black group-hover:ring-2 group-hover:ring-brand-lime-300/50 transition-all duration-500">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="MureAI app preview - approvals made easy"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-4xl font-extrabold text-brand-lime-300">Automation Made Easy</div>
                      <p className="text-xs text-white/80">From idea to automation in a single click</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-lime-300">
                        Zero Hassle
                      </div>
                    </div>
                  </div>
                  
                  {/* Click indicator overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-lime-300/90 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Card>
    </section>
  )
}

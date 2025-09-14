"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button
      asChild
      className=" bg-purple-300 group relative overflow-hidden rounded-full bg-brand-lime px-6 text-black font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-lime-300/25 active:scale-95"
    >
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer" className="relative z-10">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-lime-300">
          Free Consultation
        </span>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lime-300 via-brand-lime-400 to-brand-lime-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent  via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full z-10"></div>
      </a>
    </Button>

    
  )
  

  return (
    <section className="relative isolate overflow-hidden pt-20 min-h-screen">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center h-full py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/mureai.svg" alt="MureAI logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-brand-lime-muted">mureai</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">AUTOMATE THE</span>
            <span className="block text-brand-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">REPETITIVE</span>
            <span className="block"></span>
          </h1>
          <p className="mt-4 text-center text-lg text-white/70 max-w-2xl">
            Our AI automation saves time and cuts manual overhead so you can focus on <span className="text-purple-300">growth.</span>
          </p>
          <div className="mt-6">{buttonNew}</div>
        </div>
      </div>
    </section>
  )
}


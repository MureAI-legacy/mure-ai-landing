"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button
      asChild
      className="rounded-full bg-brand-lime px-6 text-black hover:bg-brand-lime-300 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
        Free Consultation
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
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
            Our AI automation streamlines workflows and cuts manual overhead so you can focus on growth, with
            enterprise-grade reliability.
          </p>
          <div className="mt-6">{buttonNew}</div>
        </div>
      </div>
    </section>
  )
}


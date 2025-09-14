"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Enterprise AI automation platform for modern businesses. Experience the future of work today.",
  copyright: "© 2025 — MureAI",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("mureai-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      


      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-row justify-between">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/mureai.svg" alt="MureAI logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-brand-lime-300">MureAI</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 ">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Features", "Testimonials", "Pricing", "Blog", ].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-white hover:scale-110 transition-all duration-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social media</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/mureai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300"
                      aria-label="Follow MureAI on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/@mureaiinternational"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white  transition-all duration-300"
                      aria-label="Subscribe to MureAI on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/mureai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white  transition-all duration-300"
                      aria-label="Follow MureAI on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://threads.com/mureai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white  transition-all duration-300"
                      aria-label="Follow MureAI on Threads"
                    >
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-white hover:scale-105 duration-300">
                Privacy Policy
              </Link>
              <Link href="/t&c" className="hover:text-white hover:scale-105 duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SiteHeader } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PhoneCardsGrid } from "@/components/phone-cards-grid"
import { WorkflowSteps } from "@/components/workflow-steps"
import { Features } from "@/components/features"
import { AppDescription } from "@/components/AppDescription"
import { AnimatedCards } from "@/components/animated-cards"
import { Teams } from "@/components/teams"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { ContactForm } from "@/components/contact-form"
import { AppverseFooter } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import Script from "next/script"

const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
)

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://mureai.com/#pricing",
    name: "AI Automation Pricing Plans",
    description: "AI automation pricing plans - Starter, Professional, and Enterprise packages for all business needs",
    url: "https://mureai.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "AI Automation Services",
      description: "Professional AI automation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "499",
          priceCurrency: "USD",
          description: "Basic workflow automation with 2 integrations",
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "1299",
          priceCurrency: "USD",
          description: "Advanced automation with AI voice support and 10 integrations",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "2999",
          priceCurrency: "USD",
          description: "Full AI automation suite with unlimited integrations and consulting",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://mureai.com/",
    name: "MureAI | AI Automation Made Simple, Reliable & Scalable",
    description:
      "From workflow automation to AI voice support, MureAI delivers intelligent automation that's fast, consistent, and built to transform your business.",
    url: "https://mureai.com/",
    mainEntity: {
      "@type": "Organization",
      name: "MureAI",
      url: "https://mureai.com",
      sameAs: [
        "https://twitter.com/mureai",
        "https://www.youtube.com/@mureai",
        "https://instagram.com/mureai",
        "https://linkedin.com/company/mureai",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://mureai.com/#pricing",
        name: "Pricing Section",
        url: "https://mureai.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        <section id="home">
          <Hero /> 
        </section>

        <SectionWrapper delay={0.1}>
          <section id="about">
            <AppDescription />
          </section>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <section id="services">
            <Features />
          </section>
        </SectionWrapper>

        {/* <SectionWrapper delay={0.1}>
          <section id="workflow">
            <PhoneCardsGrid />
          </section>
        </SectionWrapper> */}

        <SectionWrapper delay={0.1}>
          <section id="process">
            <WorkflowSteps />
          </section>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <section id="blog">
            <BlogPost />
          </section>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <section id="team">
            <Teams />
          </section>
        </SectionWrapper>

        {/*<SectionWrapper delay={0.2}>
          <LogoMarquee />
        </SectionWrapper> */}

        {/* <SectionWrapper delay={0.1}>
          <section id="pricing">
            <Pricing />
          </section>
        </SectionWrapper> */}

        <SectionWrapper delay={0.2}>
          <section id="contact">
            <ContactForm />
          </section>
        </SectionWrapper> 

        <SectionWrapper delay={0.1}>
          <AppverseFooter />
        </SectionWrapper>
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

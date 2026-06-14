'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Wrench } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const points = [
  'Free diagnostics & honest assessment',
  'Genuine parts with service warranty',
  'Same-day turnaround on most repairs',
]

export function FeaturedBanner() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-border bg-primary text-primary-foreground shadow-2xl shadow-primary/20 lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src="/images/repair-banner.png"
              alt="Professional technician repairing a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-5 p-8 sm:p-12"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
              <Wrench className="size-3.5" />
              Featured Service
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Expert Computer Repair Services
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Our technicians diagnose and repair hardware and software issues
              quickly and efficiently.
            </p>
            <ul className="flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-primary-foreground" />
                  {point}
                </li>
              ))}
            </ul>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="mt-2 w-fit rounded-full bg-background text-foreground hover:bg-background/90"
            >
              Book Service
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Small Business Owner',
    initials: 'RK',
    quote:
      'They upgraded all 12 office desktops and set up our network flawlessly. Professional, punctual and genuinely helpful. Our go-to IT partner now.',
  },
  {
    name: 'Priya Subramaniam',
    role: 'College Student',
    initials: 'PS',
    quote:
      'Bought a refurbished laptop on a tight budget and it works like new. The team explained everything clearly and the warranty gave me peace of mind.',
  },
  {
    name: 'Mohammed Ali',
    role: 'School Administrator',
    initials: 'MA',
    quote:
      'Their AMC service keeps our computer lab running without downtime. Fast response, fair pricing and technicians who actually know their work.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Customers Across Tirunelveli"
          description="Real feedback from the students, businesses and institutions we proudly serve."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <Quote className="size-8 text-primary/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

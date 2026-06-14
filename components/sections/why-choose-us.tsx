'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Banknote,
  Clock4,
  Headphones,
  HeartHandshake,
  Truck,
  UserCheck,
  Users,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  { icon: BadgeCheck, title: 'Genuine Spare Parts', description: 'Only authentic, warranty-backed components in every repair.' },
  { icon: UserCheck, title: 'Experienced Technicians', description: 'Certified experts with years of hands-on hardware experience.' },
  { icon: Users, title: 'Multi-Brand Support', description: 'Service for Dell, HP, Lenovo, Asus, Acer and more.' },
  { icon: Banknote, title: 'Affordable Pricing', description: 'Transparent, competitive rates with no hidden charges.' },
  { icon: Truck, title: 'Pickup & Drop Service', description: 'Convenient doorstep collection and delivery options.' },
  { icon: Clock4, title: 'Fast Turnaround Time', description: 'Most repairs completed the same day you bring them in.' },
  { icon: HeartHandshake, title: 'Customer Satisfaction', description: '98% of our customers rate our service excellent.' },
  { icon: Headphones, title: 'After-Sales Support', description: 'Dedicated help long after your purchase or repair.' },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Advanced Systems Advantage"
          description="We go beyond sales and repairs to build long-term technology partnerships you can rely on."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -right-6 -top-6 size-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <feature.icon className="relative size-7 text-primary" />
              <h3 className="relative mt-4 text-base font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

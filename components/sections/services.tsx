'use client'

import { motion } from 'framer-motion'
import {
  HardDrive,
  Laptop,
  Microscope,
  MonitorSmartphone,
  Network,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description:
      'Screen, keyboard, battery, hinge and performance fixes for all laptop brands.',
  },
  {
    icon: Wrench,
    title: 'Motherboard Repair',
    description:
      'Component-level diagnosis and repair of faulty laptop and desktop motherboards.',
  },
  {
    icon: Microscope,
    title: 'Chip-Level Service',
    description:
      'Precision micro-soldering and BGA rework handled by certified technicians.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Desktop Repair',
    description:
      'Diagnostics, upgrades and full repairs to keep your desktop running smoothly.',
  },
  {
    icon: RefreshCw,
    title: 'OS Installation',
    description:
      'Windows, Linux and software setup with drivers, updates and optimisation.',
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    description:
      'Safe recovery of lost files from failed drives, SSDs and corrupted storage.',
  },
  {
    icon: Network,
    title: 'Networking Setup',
    description:
      'Office LAN, Wi-Fi, structured cabling and secure network configuration.',
  },
  {
    icon: ShieldCheck,
    title: 'Annual Maintenance',
    description:
      'AMC plans that keep your systems healthy with priority on-site support.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-secondary/50 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 -z-10 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Expert Repair & IT Services"
          description="A complete service portfolio covering hardware, software, data and networking — fast, reliable and affordable."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

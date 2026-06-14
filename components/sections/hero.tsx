'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Award, Clock, Phone, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Award, label: '10+ Years Experience' },
  { icon: Users, label: '1000+ Happy Customers' },
  { icon: Clock, label: 'Same Day Support' },
  { icon: ShieldCheck, label: 'Genuine Parts' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 size-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-[-10rem] top-40 size-[28rem] rounded-full bg-accent/40 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Authorized Multi-Brand Computer Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Trusted Laptop &amp; Computer Solutions for{' '}
            <span className="text-primary">Business &amp; Home</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            We specialize in branded laptops, desktops, refurbished systems,
            repairs, upgrades, networking, and technical support.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Get Quote
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="tel:+919840672090" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <Phone className="size-4" />
              Call Now
            </Button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm"
              >
                <s.icon className="size-5 text-primary" />
                <dt className="text-sm font-semibold leading-snug text-foreground">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 to-accent/30 blur-2xl" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10"
          >
            <Image
              src="/images/hero-devices.png"
              alt="Modern laptop and desktop computer offered by Advanced Systems & Solutions"
              width={720}
              height={620}
              priority
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">98% Satisfaction</p>
              <p className="text-xs text-muted-foreground">Trusted since 2014</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

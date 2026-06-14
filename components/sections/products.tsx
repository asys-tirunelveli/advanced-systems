'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const products = [
  {
    title: 'Refurbished Laptops',
    description:
      'Certified, performance-tested laptops at unbeatable value, backed by warranty.',
    image: '/images/refurbished-laptops.png',
  },
  {
    title: 'Business Desktops',
    description:
      'Reliable desktop systems built for offices, institutions and everyday productivity.',
    image: '/images/business-desktops.png',
  },
  {
    title: 'Workstations',
    description:
      'High-performance machines for design, engineering and heavy computing workloads.',
    image: '/images/workstations.png',
  },
  {
    title: 'Computer Accessories',
    description:
      'Genuine keyboards, mice, webcams, storage, cables and everything in between.',
    image: '/images/accessories.png',
  },
  {
    title: 'Networking Equipment',
    description:
      'Routers, switches and structured cabling for fast, secure connectivity.',
    image: '/images/networking.png',
  },
  {
    title: 'Custom PC Builds',
    description:
      'Tailor-made builds for gaming, content creation and specialised use cases.',
    image: '/images/custom-pc.png',
  },
]

export function Products() {
  return (
    <section id="products" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Products"
          title="Technology Built for Every Need"
          description="From students to enterprises, find the right systems and accessories — all genuine, all warranty-backed."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

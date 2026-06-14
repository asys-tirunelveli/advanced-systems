'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const brands = [
  { name: 'Dell', src: '/logos/dell.svg' },
  { name: 'HP', src: '/logos/hp.svg' },
  { name: 'Lenovo', src: '/logos/lenovo.svg' },
  { name: 'Asus', src: '/logos/asus.svg' },
  { name: 'Acer', src: '/logos/acer.svg' },
]

export function TrustBrands() {
  return (
    <section className="border-y border-border bg-secondary/50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-balance text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Authorized Multi-Brand Computer Solutions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            We sell, service and support the brands trusted by millions
            worldwide.
          </p>
        </Reveal>

        <Reveal
          delay={1}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-14 w-28 items-center justify-center rounded-xl bg-card px-4 opacity-90 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:opacity-100 hover:shadow-md"
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={96}
                height={32}
                className="h-7 w-auto sm:h-8"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

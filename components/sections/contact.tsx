'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react'

const phones = ['+91 98406 72090', '+91 98404 00934', '+91 462 355 8036']

const details = [
  {
    icon: MapPin,
    title: 'Visit Our Store',
    lines: [
      'No 4 St Marks Road, Military Lane',
      'Mosque Complex, Palayamkottai',
      'Tirunelveli – 627002, Tamil Nadu, India',
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: phones,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Saturday', '10:00 AM – 8:00 PM', 'Sunday: Closed'],
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-secondary/50 py-24 text-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Get You Up and Running"
          description="Reach out for quotes, service bookings, or any technical questions. Our team is ready to help."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {details.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{d.title}</h3>
                    <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                      {d.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        className="border-input bg-background text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        required
                        placeholder="Your phone number"
                        className="border-input bg-background text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="border-input bg-background text-foreground placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-foreground">
                      How can we help?
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your requirement or issue..."
                      className="border-input bg-background text-foreground placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <Button type="submit" size="lg" className="gap-2">
                    {submitted ? (
                      'Message Sent — We will call you back'
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Advanced Systems & Solutions location map"
              src="https://www.google.com/maps?q=Palayamkottai,+Tirunelveli,+Tamil+Nadu+627002&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.2]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

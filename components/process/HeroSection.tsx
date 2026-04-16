import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-hero-copy]',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power2.out',
        }
      )

      if (imageRef.current && sectionRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-mill-brand-dark text-white"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Fresh artisan breads arranged for Mill Creek Bakery"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-8 py-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p
            data-hero-copy
            className="mb-4 font-sans text-sm uppercase tracking-wide text-white/80"
          >
            Our Process
          </p>
          <h1
            data-hero-copy
            className="font-serif text-4xl leading-tight sm:text-5xl"
          >
            Small batches. Handcrafted dough. The French tradition.
          </h1>
          <p
            data-hero-copy
            className="mt-6 max-w-xl font-sans text-base text-white/85 sm:text-lg"
          >
            We make bread the way it has been made in French boulangeries for generations — by hand, in small batches, with no shortcuts. Every loaf starts with locally sourced ingredients and a commitment to doing things the right way, even when that means starting work before most people set an alarm.
          </p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { HeroSection } from './HeroSection'
import { IngredientsSection } from './IngredientsSection'
import { TimeSection } from './TimeSection'
import { OvenSection } from './OvenSection'
import { ResultSection } from './ResultSection'

export function ProcessClient() {
  return (
    <main className="bg-mill-background pt-20 lg:pt-32">
      <HeroSection />
      <IngredientsSection />
      <TimeSection />
      <OvenSection />
      <ResultSection />
    </main>
  )
}

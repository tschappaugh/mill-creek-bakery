import { ContentHeader } from '@tschappaugh/mill-creek-ui'

export default function ProcessPage() {
  return (
    <main className="bg-mill-background pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <ContentHeader
          level="h1"
          heading="Our Process"
          body="This page is coming soon. We're building a full scrolling experience — crafted with GSAP animations — that walks you through every detail of how our bread is made."
          className="mb-12"
        />
        <div className="max-w-[640px] mx-auto">
          <p className="font-sans text-base font-semibold text-mill-text-primary mb-4">
            Here's what you can expect:
          </p>
          <ul className="font-sans text-base text-mill-text-secondary space-y-3 list-disc list-outside pl-5">
            <li>Our philosophy — why we bake the way we do</li>
            <li>A brief history of Mill Creek Bakery and the French tradition behind our breads</li>
            <li>Local and organic ingredients — who we source from and why it matters</li>
            <li>The late finish and early start — our overnight process and why freshness can't be faked</li>
            <li>Special equipment — the deck ovens, steam injection, and hand-scoring tools that shape every loaf</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export function TimeSection() {
  return (
    <section className="bg-white/60 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="mx-auto h-72 w-72 rounded-full border-8 border-mill-brand-dark/20 bg-mill-brand-dark/10" />
        <div>
          <h2 className="font-serif text-3xl text-mill-text-primary sm:text-4xl">
            Time does the heavy lifting
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base text-mill-text-secondary">
            This section is prepared for the rotating moon-to-sun disc animation
            with a ScrollTrigger scrub.
          </p>
        </div>
      </div>
    </section>
  )
}

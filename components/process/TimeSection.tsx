export function TimeSection() {
  return (
    <section className="bg-white/60 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="mx-auto h-72 w-72 rounded-full border-8 border-mill-brand-dark/20 bg-mill-brand-dark/10" />
        <div>
          <h2 className="font-serif text-3xl text-mill-text-primary sm:text-4xl">
          We Take Our Time to Get It Right
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base text-mill-text-secondary">
          Great bread cannot be rushed. We begin preparing our doughs the evening before, then return in the early morning hours to shape, proof, and bake — giving each variety exactly the time it needs to develop flavor and structure. A sourdough needs a long cold ferment to build its characteristic tang and open crumb. A croissant demands two days of careful lamination before it ever sees the oven. We work around the bread, not the other way around.
          </p>
        </div>
      </div>
    </section>
  )
}

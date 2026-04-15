export function IngredientsSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-mill-text-primary sm:text-4xl">
          Local ingredients, layered with intention
        </h2>
        <p className="mt-5 font-sans text-base text-mill-text-secondary">
          Scaffold in place for the timed ingredient entrance sequence and depth
          layering.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="h-44 rounded-2xl border border-mill-text-secondary/20 bg-white/70" />
        <div className="h-44 rounded-2xl border border-mill-text-secondary/20 bg-white/70" />
        <div className="h-44 rounded-2xl border border-mill-text-secondary/20 bg-white/70" />
      </div>
    </section>
  )
}

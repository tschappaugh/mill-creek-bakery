export function IngredientsSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-mill-text-primary sm:text-4xl">
        Fresh, Locally Sourced Ingredients
        </h2>
        <p className="mt-5 font-sans text-base text-mill-text-secondary">
        Good bread begins long before the oven. We source our bread flour from Marian Milling, our milk and butter from Shatto Milk Company, and our eggs from Juarez Farm — ingredients from producers we trust, close to home. Our water comes from local springs, a nod to Shawnee's own history as Gum Springs, named by early settlers for the natural springs they found here. We finish every loaf with artisanal sea salt, because the small details are where the difference is made.
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

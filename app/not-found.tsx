import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-mill-background pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="font-serif text-5xl font-light text-mill-text-primary mb-6">
          Page Not Found
        </h1>
        <p className="font-sans text-base text-mill-text-secondary mb-10">
          We couldn't find what you were looking for. It may have been moved or removed.
        </p>
        <Link
          href="/"
          className="font-sans text-sm text-mill-brand-dark underline hover:text-mill-brand-darker"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

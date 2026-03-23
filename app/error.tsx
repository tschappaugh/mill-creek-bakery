'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[Mill Creek] Page error:', error.message)
  }, [error])

  return (
    <main className="bg-mill-background pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="font-serif text-5xl font-light text-mill-text-primary mb-6">
          Something went wrong
        </h1>
        <p className="font-sans text-base text-mill-text-secondary mb-10">
          We couldn't load this page. This may be a temporary issue — please try again.
        </p>
        <button
          onClick={reset}
          className="font-sans text-sm text-mill-brand-dark underline hover:text-mill-brand-darker"
        >
          Try again
        </button>
      </div>
    </main>
  )
}

import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export function Logo({ variant = 'light' }: LogoProps) {
  return (
    <Image
      src={variant === 'dark' ? '/logo-reverse.svg' : '/logo.svg'}
      alt="Mill Creek Bakery"
      width={140}
      height={48}
      priority
    />
  )
}

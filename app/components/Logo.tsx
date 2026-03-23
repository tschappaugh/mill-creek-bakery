import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  width?: number
  height?: number
}

export function Logo({ variant = 'light', width = 140, height = 48 }: LogoProps) {
  return (
    <Image
      src={variant === 'dark' ? '/logo-reverse.svg' : '/logo.svg'}
      alt="Mill Creek Bakery"
      width={width}
      height={height}
      priority
    />
  )
}

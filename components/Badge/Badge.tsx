type BadgeVariant = 'default' | 'featured' | 'subtle'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-mill-accent text-mill-text-primary',
  featured: 'bg-mill-brand text-mill-background',
  subtle: 'bg-mill-surface text-mill-text-primary border border-mill-border',
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={`
            inline-flex items-center
            px-3 py-1.5
            rounded
            text-xs font-semibold tracking-widest uppercase
            ${variantStyles[variant]}
            ${className ?? ''}
        `}
    >
      {label}
    </span>
  )
}

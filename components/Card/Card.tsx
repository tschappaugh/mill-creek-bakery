import { Badge } from '../Badge'

type CardVariant = 'default' | 'minimal' | 'featured'

interface CardImage {
  src: string
  alt: string
}

interface CardProps {
  variant?: CardVariant
  title: string
  excerpt?: string
  tag: string
  image: CardImage
  href: string
}

const variantStyles: Record<CardVariant, string> = {
  default: 'flex flex-col',
  minimal: 'flex flex-col',
  featured: 'flex flex-row',
}

export function Card({
  variant = 'default',
  title,
  excerpt,
  tag,
  image,
  href,
}: CardProps) {
  return (
    <a
      href={href}
      className={`
        block 
        bg-mill-surface
        border border-mill-border
        rounded-lg 
        shadow-sm 
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:-translate-y-0.5 
        hover:shadow-md 
        ${variantStyles[variant]}
      `}
    >
      <div
        className={`
        relative
        ${variant === 'featured' ? 'w-2/5 aspect-auto self-stretch' : 'w-full aspect-3/2'}
      `}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div
        className={`
        flex flex-col gap-2
        ${variant === 'featured' ? 'w-3/5 justify-center p-8' : 'p-6 items-center'}
      `}
      >
        <Badge
          label={tag}
          className={variant === 'featured' ? 'self-start' : ''}
        />

        <h3
          className={`
        font-light
        text-mill-text-primary
        leading-heading-s
        ${variant === 'featured' ? 'text-4xl' : 'text-xl text-center'}        
      `}
        >
          {title}
        </h3>

        {excerpt && variant !== 'minimal' && (
          <p className="text-sm leading-body-s text-mill-text-secondary">
            {excerpt}
          </p>
        )}
      </div>
    </a>
  )
}
